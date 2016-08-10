import {SET_VALUE} from '../constants/ActionTypes';

const initialState = {
  value: 'myTest',
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
