import React from 'react';

import { useGlobalStore } from '../hooks/useGlobalStore';
import { BlueText } from '../components/blueText/blueText';
import { InputText } from '../components/inputText/inputText';
import { Card } from '../components/card/card';

export const MiddleSection = () => {
	console.log('rendering "MiddleSection"');
	const globalStore = useGlobalStore();

	return (
		<div className="middle-section">
			<h1>{globalStore.middleSection.title}</h1>
			<BlueText />
			<br/><br/>
			<InputText />
			<br/><br/>
			<Card />
		</div>
	);
};
