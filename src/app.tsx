import React from 'react';
import './app.scss';

import { Proxserve } from 'proxserve';
import { loremIpsum } from './loremIpsum';
import { globalStoreContext } from './contexts/globalStore';
import type { GlobalStore } from './contexts/globalStore';
import { TopSection } from './sections/top';
import { MiddleSection } from './sections/middle';
import { BottomSection } from './sections/bottom';

export const App = () => {
	const globalStore = Proxserve.make<GlobalStore>({
		topSection: {
			title: 'Top Section',
			body: loremIpsum[0],
			inputText: 'type here and see the magic',
			bigList: []
		},
		middleSection: {
			title: 'Middle Section',
			body: loremIpsum[1],
			card: {
				title: 'Card Title'
			}
		},
		bottomSection: {
			title: 'Bottom Section',
			body: loremIpsum[2]
		},
	}, { name: 'app', debug: { trace: 'verbose' } });

	return (
		<globalStoreContext.Provider value={globalStore}>
			<TopSection />
			<MiddleSection />
			<BottomSection />
		</globalStoreContext.Provider>
	);
};
