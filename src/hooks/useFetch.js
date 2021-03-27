import { useEffect, useRef, useReducer } from 'react';
import mockdata from '../assets/mockdata/mockdata.json';

export const useFetch = (url, source) => {
	const cache = useRef({});
	console.log(`source1: ${source}`)
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
		console.log(`url: ${url}, source2: ${source}`);
		const fetchData = async () => {
			dispatch({ type: 'FETCHING' });
			if (source === "favorites") {
				var newmockdata = {items:[]}
				newmockdata.items = mockdata.items.slice(1,4);
				dispatch({ type: 'FETCHED', payload: newmockdata });
			}
			else if (cache.current[url]) {
				const data = cache.current[url];
				dispatch({ type: 'FETCHED', payload: data });
			} else {
				const response = await fetch(url);
				const data = await response.json();
				try {
					if (data.error) {
						dispatch({ type: 'FETCHED', payload: mockdata });
						}
					else {
							cache.current[url] = data;
							if (cancelRequest) return;
								dispatch({ type: 'FETCHED', payload: data });
					}
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
