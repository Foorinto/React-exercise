import ACTION_TYPE from "../action-types";

const initialState = {
	dummyValue: 'dummy',
};

export default function dummyReducer(state = initialState, action) {

    const {
		type,
        payload,
    } = action;
    
    switch (type) {

		case ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE: {
			return {
				...state,
				dummyValue: payload,
			};
		}

        default:
            return state;
    }

}
