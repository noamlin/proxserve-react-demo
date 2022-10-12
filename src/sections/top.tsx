import React from 'react';

import { useGlobalStore } from '../hooks/useGlobalStore';
import { RedText } from '../components/redText/redText';
import { BigList } from '../components/bigList/bigList';

export const TopSection = () => {
	console.log('rendering "TopSection"');
	const globalStore = useGlobalStore(['.topSection.inputText']);

	return (
		<div className="top-section">
			<h1>{globalStore.topSection.title}</h1>
			<RedText />
			<br/><br/>
			<input value={globalStore.topSection.inputText} disabled />
			<br/><br/>
			<BigList />
		</div>
	);
};
