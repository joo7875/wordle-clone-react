import produce from 'immer';
import { COLS, ADD_LETTER, DELETE_LETTER, UPDATE_ROW_NUM } from './constants';

const initialState = {
    row_number: 1,
    row_1: [],
    row_2: [],
    row_3: [],
    row_4: [],
    row_5: [],
    row_6: [],
    answer: 'dairy'
};

const rootReducer = (state = initialState, action) => 

    produce(state, draft => {
        const { row_number, row_1, row_2, row_3, row_4, row_5, row_6 } = state; 

        switch (action.type) {
            case ADD_LETTER:
                if (row_number === 1) draft.row_1 = [...row_1, action.payload];
                else if (row_number === 2) draft.row_2 = [...row_2, action.payload];
                else if (row_number === 3) draft.row_3 = [...row_3, action.payload];
                else if (row_number === 4) draft.row_4 = [...row_4, action.payload];
                else if (row_number === 5) draft.row_5 = [...row_5, action.payload];
                else if (row_number === 6) draft.row_6 = [...row_6, action.payload];
                break;
            case DELETE_LETTER:
                if (row_number === 1) draft.row_1 = row_1.slice(0, row_1.length-1);
                else if (row_number === 2) draft.row_2 = row_2.slice(0, row_2.length-1);
                else if (row_number === 3) draft.row_3 = row_3.slice(0, row_3.length-1);
                else if (row_number === 4) draft.row_4 = row_4.slice(0, row_4.length-1);
                else if (row_number === 5) draft.row_5 = row_5.slice(0, row_5.length-1);
                else if (row_number === 6) draft.row_6 = row_6.slice(0, row_6.length-1);
                break;
            case UPDATE_ROW_NUM:
                draft.row_number = action.payload;
                break;
            default:
                return state;
        }
    });




export default rootReducer;