import React from 'react';
import styled from 'styled-components';

import { Square } from './Square';

export const Board = () => {

    const createSquare = () => {
        let board = [];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                board.push(<Square key={`${i}${j}`} order={i + 1} index={j} />);
            }
        }
        return board;
    }

    return (
        <BoardContainer id='board-container'>
            {createSquare()}
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    padding: 10px;

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