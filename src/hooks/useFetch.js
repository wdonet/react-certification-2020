import React, { useEffect, useRef, useReducer } from 'react';
import mockdata from '../assets/mockdata/mockdata.json';
import { StoreContext } from '../contexts/Store';

export const useFetch = (url, source) => {
	
	const cache = useRef({});
	const {
        "favorites": [favorites, setFavorites],
    } = React.useContext(StoreContext)
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
			if (source === "favorites") {
				var newmockdata = {items:[]}
				// newmockdata.items = mockdata.items.slice(1,4);
				
				for (const [id, value] of Object.entries(favorites)) {
					newmockdata.items.push(value);
				}
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
					if (cancelRequest) return;
					dispatch({ type: 'FETCH_ERROR', payload: mockdata });
				}
			}
		};

		fetchData();

		return function cleanup() {
			cancelRequest = true;
		};
	}, [url, source, favorites]);

	return state;
};
