// createStore : Creates a Redux store that holds the complete state tree of your app.
// There should only be a single store in your app.
// applyMiddleware : The only store enhancer that ships with Redux.
// For example, it includes the Redux Thunk middleware in the dispatch mechanism of the store
import {createStore, applyMiddleware} from 'redux';

/* MIDDLEWARES*/
// The redux-thunk framework is a Redux middleware that lets you dispatch a function which may or may not be async.
// The function takes a single parameter, a function dispatch(), which lets you dispatch actions.
// Lets the action creators invert control by dispatching functions.
// They would receive dispatch as an argument and may call it asynchronously
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './redux/reducers';
import * as serviceWorker from './serviceWorker';

// The store that will be consume by the app
// It will be called in index.js and then passed at <Root /> as a 'store' prop

const getMiddlewares = () =>
	process.env.NODE_ENV === 'development' ?
		composeWithDevTools(
			applyMiddleware(
				thunkMiddleware, // lets us dispatch() functions
			)
		)
	:
		applyMiddleware(
			thunkMiddleware, // lets us dispatch() functions
		)
;

const store = createStore(reducers, getMiddlewares());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;
