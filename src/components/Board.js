import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import 'animate.css';

import { Square } from './Square';
import { COLS, ROWS, GREEN, WHITE } from '../redux/constants';
import { getColor } from '../utils/getColor';
import { addLetter, deleteLetter, updateRowNum } from '../redux/actions';
import { GetCurrentRow } from '../utils/GetCurrentRow';

export const Board = () => {

    const dispatch = useDispatch();
    const { row_number, answer } = useSelector(state => state);
    
    const curRow = GetCurrentRow(row_number);

    const createSquare = () => {
        let board = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                board.push(<Square key={`${i}${j}`} order={i + 1} index={j} />);
            }
        }
        return board;
    }

    useEffect(() => {
        if (row_number !== 1) {

            const interval = 200;

            for (let i = 0; i < COLS; i++) {

                setTimeout(() => {
                    let sq = document.getElementById(`${row_number - 1}${i}`);
                    let letter = sq.textContent;
    
                    const color = getColor(i, letter, answer);
        
                    sq.classList.add('animate__flipInX');
                    sq.style = `background-color: ${color}; border-color: ${color}; color: ${WHITE}`;
                }, interval * i)
                
            }
        }
    }, [answer, row_number]);

    const onKeyDown = useCallback(e => {
        const key = e.key;
        const code = e.keyCode;

        const isAlphabet = code > 64 && code < 91;

        if (key === 'Enter') {
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
                btn.style.color = WHITE;
            }
        }
        else if (key === 'Backspace') {
            if (curRow.length > 0) dispatch(deleteLetter());
        }
        else {
            if (isAlphabet && curRow.length < COLS) dispatch(addLetter(key));
        }
        
    }, [curRow, dispatch, row_number, answer]);

    useEffect(() => {
        if (row_number <= ROWS) {
            document.addEventListener('keydown', onKeyDown);
            return () => document.removeEventListener('keydown', onKeyDown);
        }
    }, [onKeyDown, curRow, row_number]);

    return (
        <BoardContainer id='board-container'>
            {createSquare()}
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 64px);
    grid-gap: 5px;
    padding: 10px;
    justify-content: center;

    .square {
        min-weight: 60px;
        min-height: 60px;
        border: 2px solid gray;
        text-transform: uppercase;
        font-size: 40px;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;