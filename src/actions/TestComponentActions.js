import * as types from '../constants/ActionTypes';

export function setValue(value) {
  return {
    type: types.SET_VALUE,
    value,
  };
}
