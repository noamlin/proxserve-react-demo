import React, { ChangeEventHandler, useCallback } from 'react';
import './inputText.scss';

import { useGlobalStore } from '../../hooks/useGlobalStore';

// input as another component so it will only trigger its own re-render
export const InputText = () => {
	console.log('rendering "InputText"');
	const globalStore = useGlobalStore(['.topSection.inputText']);

	const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
		globalStore.topSection.inputText = event.target.value;
	}, []);

    const onClick = useCallback(() => {
		alert(`typing in the input should trigger the following re-renders:
        1. TopSection component and all of its children
        2. InputText component (no parent and no children)
        3. CardBody component (no parents and no children)
        4. BottomSection component and all of its children`);
	}, []);

	return (
        <>
            <input value={globalStore.topSection.inputText} onChange={onChange} />
            {' '}
            <button className="input-i-button" onClick={onClick}>i</button>
        </>
    );
};