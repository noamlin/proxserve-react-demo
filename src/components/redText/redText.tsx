import React, { useCallback } from 'react';
import './redText.scss';

import { loremIpsum } from '../../loremIpsum';
import { useGlobalStore } from '../../hooks/useGlobalStore';

export const RedText = () => {
	console.log('rendering "RedText"');
	const globalStore = useGlobalStore();

	const onClick = useCallback(() => {
		const randomIndex = Math.floor(Math.random() * (loremIpsum.length - 1));
		globalStore.middleSection.body = loremIpsum[randomIndex];
	}, []);

	return (
		<>
			<span className="red-text">{globalStore.topSection.body}</span>
			<br/>
			<button onClick={onClick}>random text for blue</button>
		</>
	);
};
