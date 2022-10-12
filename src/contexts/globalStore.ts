import React from 'react';
import { Proxserve } from 'proxserve';
import type { ProxserveInstance } from 'proxserve';

export const initialStore = Proxserve.make<{
	topSection: ProxserveInstance & {
		title: string;
		body: string;
		inputText: string;
		bigList: string[];
	};
	middleSection: ProxserveInstance & {
		title: string;
		body: string;
		card: {
			title: string;
		};
	};
	bottomSection: ProxserveInstance & {
		title: string;
		body: string;
	};
}>({
	topSection: {
		title: '',
		body: '',
		inputText: '',
		bigList: [],
	},
	middleSection: {
		title: '',
		body: '',
		card: {
			title: '',
		},
	},
	bottomSection: {
		title: '',
		body: '',
	},
});

export type GlobalStore = typeof initialStore;

export const globalStoreContext = React.createContext<GlobalStore>(
	Proxserve.make<GlobalStore>({})
);
