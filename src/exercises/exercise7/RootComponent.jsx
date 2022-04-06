import React, { useState } from 'react';

const RootComponent = (props) => {

	const [/*triggerUseEffect*/, setTriggerUseEffect] = useState(0);
	const [state/*, setState*/] = useState({
		text: 'none',
		value: 0,
	});

	/* It should be used like that
	useWithFirstMountEffect(

		// this function is the one executed on initial render
		() => {
			setState({
				text: 'mountFunction',
				value: 50,
			})
		},
		// this function is the one executed on initial render

		// this function is the one executed on on all renders after
		() => {
			setState(state => ({
				text: 'afterMountFunction',
				value: state.value + 1,
			}))
		},
		// this function is the one executed on on all renders after

		[triggerUseEffect],		// dependencies, like for a useEffect
	);
	*/

	return(
		<div>
			<div>{state.text}</div>
			<div>{state.value}</div>
			<button
				onClick={() => {setTriggerUseEffect(triggerUseEffect => triggerUseEffect + 1)}}
			>
				Trigger useWithFirstMountEffect
			</button>
		</div>
	);

};

export default RootComponent;