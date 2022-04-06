import React, { useEffect, useState } from 'react';

const RootComponent = (props) => {

	const [state, setState] = useState(0);

	useEffect(() => {
		// we want this useEffect to skip the mount (this useEffect will loop indefinetely...)
		// we stop it at 50 to prevent a react warning...
		if (state < 50) setState(state => state + 1);
	}, [state]);

	/*

	Basically it should be used like:
	useSkipMountEffect(() => {
		// we want this useEffect to skip the mount (this useEffect will loop indefinetely...)
		// we stop it at 50 to prevent a react warning...
		if (state < 50) setState(state => state + 1);
	}, [state]);

	*/

	return(
		<div>
			<h3>With the usage of useRef, create a custom hook using useEffect that skips first mount</h3>
			<div>
				State value should remain at 0 on mount (because the useEffect should not be triggered on mount)<br/>
				Or more precisely, the useEffect will run, but the function given to it should not be run on first mount..
			</div>
			<div>{state}</div>
			<button
				onClick={() => {setState(state => state + 1)}}
			>
				Increase count
			</button>
		</div>
	);

};

export default RootComponent;