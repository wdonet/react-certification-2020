import { useEffect, useRef, useReducer } from 'react';
import mockdata from '../assets/mockdata/mockdata.json';
export const useFetch = (url) => {
	const cache = useRef({});

	const initialState = {
		status: 'idle',
		error: null,
		data: [],
	};

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'FETCHING':
				return { ...initialState, status: 'fetching' };
			case 'FETCHED':
				return { ...initialState, status: 'fetched', data: action.payload };
			case 'FETCH_ERROR':
				return { ...initialState, status: 'error', data: action.payload };
			default:
				return state;
		}
	}, initialState);

	useEffect(() => {
		let cancelRequest = false;
		if (!url) return;

		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
			if (cache.current[url]) {
				const data = cache.current[url];
				dispatch({ type: 'FETCHED', payload: data });
			} else {
				const response = await fetch(url);
				const data = await response.json();
				console.log({ data });
				if (data.error) {
					console.log("lo que yo quiero");
						dispatch({ type: 'FETCH_ERROR', payload: mockdata });
					}
				else {
					console.log("lo que yo NO quiero");
						cache.current[url] = data;
						if (cancelRequest) return;
							dispatch({ type: 'FETCHED', payload: data });
						}
				try {
					
					

				} catch (error) {
					console.log("error");
					if (cancelRequest) return;
					dispatch({ type: 'FETCH_ERROR', payload: mockdata });
				}
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [url]);

	return state;
};
