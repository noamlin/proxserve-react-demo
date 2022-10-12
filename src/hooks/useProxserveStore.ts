import React, { useContext, useEffect, useReducer } from 'react';
import { uid } from 'uid';
import { ProxserveInstance } from 'proxserve';

export const useProxserveStore = function useProxserveStore<T>(
    context: React.Context<ProxserveInstance & T>,
    paths2observe: string[] = [],
) {
    // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
	const [, forceUpdate] = useReducer(x => x + 1, 0);

	const store = useContext(context);

    useEffect(() => {
        const randomId = uid();

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
