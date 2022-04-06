import React from 'react';
import { connect } from 'react-redux';
//import ACTION_TYPE from '../../redux/action-types';

const RootComponent = (props) => {

	// The dummyReducer is defined in the folder redux/reducers, it has only one ACTION_TYPE.. 
	// ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE

	return(
		<div>
			<h3>Update dummyValue in dummyReducer</h3>
			<div>DummyValue: {/* display dummyValue from dummyReducer */}</div>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to yes
				}}
			>
				Set dummyValue to 'yes'
			</button>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to no
				}}
			>
				Set dummyValue to 'no'
			</button>
		</div>
	);

};

const mapStateToProps = state => ({
	// access dummyValue in dummyReducer
});

const mapDispatchToProps = dispatch => ({
	// or any otherway you want...
	//updateDummyValue: ...
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);