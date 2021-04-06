/**
 * By Alfredo Pacheco
 * alfredo.pacheco@wizeline.com
 * j.alfredo.pacheco@gmail.com
 *
 * Using localStorage thru react-query
 */
import { useMutation, useQuery, useQueryClient } from 'react-query';

const useLocalStorageMutation = ({ cacheKey }) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newValue) => {
      localStorage.setItem(cacheKey, JSON.stringify(newValue));
      return newValue;
    },
    {
      onMutate: async (newValue) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(cacheKey);

        // Snapshot the previous value
        const previousValue = queryClient.getQueryData(cacheKey);

        // Optimistically update to the new value
        queryClient.setQueryData(cacheKey, () => newValue);

        // Return a context object with the snapshotted value
        return { previousValue, newValue };
      },
      onError: (err, newValue, context) => {
        queryClient.setQueryData(cacheKey, context.previousValue);
      },
      onSettled: () => {
        queryClient.invalidateQueries(cacheKey);
      },
    }
  );
};

const useLocalStorage = ({ cacheKey, initialData }) => {
  const mutation = useLocalStorageMutation({ cacheKey });

  return {
    ...useQuery(
      cacheKey,
      () => {
        const value = localStorage.getItem(cacheKey);
        if (value) return JSON.parse(value);
        mutation.mutate(initialData);
        return initialData;
      },
      {
        retry: 1,
        initialData,
      }
    ),
    mutation,
  };
};

export { useLocalStorage, useLocalStorageMutation };
