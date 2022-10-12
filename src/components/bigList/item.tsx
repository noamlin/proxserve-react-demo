import React, { useCallback } from 'react';

import { useGlobalStore } from '../../hooks/useGlobalStore';

export const Item = ({ itemNumber }: { itemNumber: number }) => {
	console.log(`rendering "Item ${itemNumber}"`);

	const globalStore = useGlobalStore([`.topSection.bigList[${itemNumber}]`]);

    if (!globalStore.topSection.bigList[itemNumber]) {
        // initiate
        globalStore.topSection.bigList[itemNumber] = 'a';
    }

    const onClick = useCallback(() => {
        const currentCode = globalStore.topSection.bigList[itemNumber].charCodeAt(0);
        let nextCode = currentCode + 1;
        if (nextCode > 122) nextCode = 97;
		globalStore.topSection.bigList[itemNumber] = String.fromCharCode(nextCode);
	}, []);

	return <li>
        <button onClick={onClick}>{itemNumber}{globalStore.topSection.bigList[itemNumber]}</button>
    </li>;
};
