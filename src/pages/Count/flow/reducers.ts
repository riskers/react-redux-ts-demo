import * as CONST from './constants';

const initState = 0;

export function countReducer(state = initState, action: any) {
  switch (action.type) {
    case CONST.ADD:
      return state + 1;
    case CONST.DES:
      return state - 1;
    default:
      return state;
  }
}
