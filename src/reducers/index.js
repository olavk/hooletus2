import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import testComponent from '../components/TestComponent/TestComponentReducer';

const rootReducer = combineReducers({
  testComponent,
  routing: routerReducer,
});

export default rootReducer;
