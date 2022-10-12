import React from 'react';

import { useGlobalStore } from '../../hooks/useGlobalStore';

export const CardBody = () => {
	console.log('rendering "CardBody"');
	const globalStore = useGlobalStore(['.topSection.inputText']);

	return (
		<div className="card-body">{globalStore.topSection.inputText}</div>
	);
};
