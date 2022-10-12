import React, { ChangeEventHandler, useCallback } from 'react';

import { useGlobalStore } from '../hooks/useGlobalStore';
import { GreenText } from '../components/greenText/greenText';

export const BottomSection = () => {
	console.log('rendering "BottomSection"');
	const globalStore = useGlobalStore(['.topSection.inputText']);

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
		globalStore.topSection.inputText = event.target.value;
	}, []);

	return (
		<div className="bottom-section">
			<h1>{globalStore.bottomSection.title}</h1>
			<GreenText />
			<br/><br/>
			<input value={globalStore.topSection.inputText} onChange={onChange} />
		</div>
	);
};
