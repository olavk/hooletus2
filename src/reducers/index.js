import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import testComponent from './TestComponentReducer';

const rootReducer = combineReducers({
  router: routerStateReducer,
  testComponent,
});

export default rootReducer;
