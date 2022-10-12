import React from 'react';
import './greenText.scss';

import { useGlobalStore } from '../../hooks/useGlobalStore';

export const GreenText = () => {
	console.log('rendering "GreenText"');
	const globalStore = useGlobalStore();

	return (
		<span className="green-text">{globalStore.bottomSection.body}</span>
	);
};
