import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addLetter, deleteLetter, updateRowNum } from '../redux/actions';
import { COLS, ROWS, GREEN } from '../redux/constants';
import { GetCurrentRow } from '../utils/GetCurrentRow';
import { getColor } from '../utils/getColor';

export const Button = ({ index }) => {

    const dispatch = useDispatch();
    const { row_number, answer } = useSelector(state => state);

    let curRow = GetCurrentRow(row_number);

    const onKeyClick = () => {

        if (row_number <= ROWS) {
            if (index === 'enter') {
                if (curRow.length < COLS) {
                    window.alert('Not enough letters');
                    return;
                }

                dispatch(updateRowNum(row_number + 1));
                
                if (curRow.join('') === answer) window.alert('Congratulations!');
                if (row_number === ROWS) window.alert(`Sorry, you have no more guesses! The word is ${answer}.`);

                // keyboard color
                // curRow.length === COLS
                for (let i = 0; i < COLS; i++) {
                    let btn = document.getElementById(curRow[i]);
                    let preColor = btn.style.backgroundColor;

                    if (preColor === GREEN) continue;

                    const color = getColor(i, curRow[i], answer);

                    btn.style.backgroundColor = color;
                    btn.style.borderColor = color;
                }
            }
            else if (index === 'del') {
                if (curRow.length > 0) dispatch(deleteLetter());
            }
            else {
                if (curRow.length < COLS) dispatch(addLetter(index));
            }
        }
    }

    return (
        <button id={index} onClick={onKeyClick} style={buttonStyle}>{index}</button>
    );
}

const buttonStyle = {
    backgroundColor: 'lightgray',
    border: 0,
    padding: 0,
    cursor: 'pointer',
    fontWeight: 'bold',
    userSelect: 'none',
    textTransform: 'uppercase',
    height: '58px',
    flexGrow: 1,
    marginRight: '6px',
    borderRadius: '4px'
}
