import { ADD_LETTER, DELETE_LETTER, UPDATE_ROW_NUM } from './constants';

export const addLetter = (payload) => ({ type: ADD_LETTER, payload });
export const deleteLetter = () => ({ type: DELETE_LETTER });
export const updateRowNum = (payload) => ({ type: UPDATE_ROW_NUM, payload });