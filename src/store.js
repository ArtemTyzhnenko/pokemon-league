import {createStore, applyMiddleware } from 'redux';
import combineStores from './reducers/combineStores';
import thunk from 'redux-thunk';


export default createStore(combineStores, applyMiddleware(thunk));
