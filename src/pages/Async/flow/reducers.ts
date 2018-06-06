import * as CONST from './constants';

const initState = {
  loading: false,
  data: [],
  error: '',
};

export function asyncReducer(state = initState, action: any) {
  switch (action.type) {
    case CONST.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CONST.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.items,
      };
    case CONST.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
