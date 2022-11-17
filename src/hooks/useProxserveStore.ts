import React, { useContext, useEffect, useReducer } from 'react';
import type { ProxserveInstance } from 'proxserve';

export const useProxserveStore = function useProxserveStore<T>(
    context: React.Context<ProxserveInstance & T>,
    paths2observe: string[] = [],
) {
    // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
	const [, forceUpdate] = useReducer(x => x + 1, 0);

	const store = useContext(context);

    useEffect(() => {
        // should be random enough for us
        const randomId = Math.random().toString().slice(2, 10)
            + Math.random().toString().slice(2, 10)
            + Math.random().toString().slice(2, 10);

        paths2observe.forEach((path) => {
            store.on({
                event: 'change',
                path,
                id: randomId,
                listener: forceUpdate,
            });
        });

		return function cleanup() {
			store.removeListener({ id: randomId })
		}
	}, []);

    return store;
};
