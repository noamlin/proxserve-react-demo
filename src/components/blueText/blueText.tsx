import React from 'react';
import './blueText.scss';

import { useGlobalStore } from '../../hooks/useGlobalStore';

export const BlueText = () => {
	console.log('rendering "BlueText"');
	const globalStore = useGlobalStore(['.middleSection.body']);

	return (
		<span className="blue-text">{globalStore.middleSection.body}</span>
	);
};
