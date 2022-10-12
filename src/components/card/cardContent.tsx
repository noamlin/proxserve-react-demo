import React from 'react';

import { useGlobalStore } from '../../hooks/useGlobalStore';
import { CardBody } from './cardBody';

export const CardContent = () => {
	console.log('rendering "CardContent"');
	const globalStore = useGlobalStore();

	return (
		<div className="card-content">
			<h2>{globalStore.middleSection.card.title}</h2>
			<CardBody />
		</div>
	);
};
