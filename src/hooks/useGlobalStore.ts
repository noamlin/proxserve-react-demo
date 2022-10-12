import React from 'react';

import { globalStoreContext } from '../contexts/globalStore';
import type { GlobalStore } from '../contexts/globalStore';
import { useProxserveStore } from './useProxserveStore';

export const useGlobalStore = function useGlobalStore(paths2observe: string[] = []) {
	const globalStore = useProxserveStore<GlobalStore>(globalStoreContext, paths2observe);

	return globalStore;
};
