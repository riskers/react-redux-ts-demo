import { Dispatch } from 'redux';
import * as CONST from './constants';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fetchData = (username: string, page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: CONST.FETCH_DATA_LOADING,
    });

    await delay(2000);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${username}&page=${page}`);
      let data = await response.json();

      dispatch({
        type: CONST.FETCH_DATA_SUCCESS,
        payload: data
      });
    } catch (e) {
      dispatch({
        type: CONST.FETCH_DATA_ERROR,
        error: e,
      });
    }
  };
};
