import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import 'animate.css';

import { Square } from './Square';
import { COLS } from '../redux/constants';
import { getColor } from '../utils/getColor';

export const Board = () => {

    const { row_number, answer } = useSelector(state => state);

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
                    sq.style = `background-color: ${color}; border-color: ${color}`;
                }, interval * i)
                
            }
        }
    }, [row_number]);

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
        font-size: 50px;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;