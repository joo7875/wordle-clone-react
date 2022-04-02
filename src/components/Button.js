import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addLetter, deleteLetter } from '../redux/actions';
import { COLS } from '../redux/constants';

export const Button = ({ index }) => {

    const dispatch = useDispatch();
    const { row_number, row_1, row_2, row_3, row_4, row_5, row_6 } = useSelector(state => state);

    let curRow;
    switch (row_number) {
        case 1: curRow = row_1; break;
        case 2: curRow = row_2; break;
        case 3: curRow = row_3; break;
        case 4: curRow = row_4; break;
        case 5: curRow = row_5; break;
        case 6: curRow = row_6; break;
        default: break;
    }

    const onKeyClick = () => {
        if (index === 'enter') {
            if (curRow.length < COLS) {
                window.alert('Not enough letters');
                return;
            }
            console.log(row_number, curRow)
        }
        else if (index === 'del') {
            if (curRow.length > 0) dispatch(deleteLetter());
        }
        else {
            if (curRow.length < COLS) dispatch(addLetter(index));
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
