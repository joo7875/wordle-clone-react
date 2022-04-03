import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteLetter, updateRowNum, addLetter } from '../redux/actions';

import { ROWS, COLS } from '../redux/constants';
import { GetCurrentRow } from './GetCurrentRow';

export const KeyPress = () => {

    const dispatch = useDispatch();
    const { row_number, answer } = useSelector(state => state);

    let curRow = GetCurrentRow(row_number);

    if (row_number <= ROWS) {
        document.addEventListener('keypress', (e) => {
            const key = e.key;

            if (key === 'Enter') {
                if (curRow.length < COLS) {
                    window.alert('Not enough letters');
                    return;
                }

                dispatch(updateRowNum(row_number + 1));
                
                if (curRow.join('') === answer) window.alert('Congratulations!');
                if (row_number === ROWS) window.alert(`Sorry, you have no more guesses! The word is ${answer}.`);
            }
            else if (key === 'del') {
                if (curRow.length > 0) dispatch(deleteLetter());
            }
            else {
                if (curRow.length < COLS) dispatch(addLetter(key));
            }

        });
    }

}