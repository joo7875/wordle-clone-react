import React from 'react';
import styled from 'styled-components';

export const Board = () => {

    return (
        <BoardContainer id='board-container'>
            <div className='square' id='1'></div>
            <div className='square' id='2'></div>
            <div className='square' id='3'></div>
            <div className='square' id='4'></div>
            <div className='square' id='5'></div>
            <div className='square' id='6'></div>
            <div className='square' id='7'></div>
            <div className='square' id='8'></div>
            <div className='square' id='9'></div>
            <div className='square' id='10'></div>
            <div className='square' id='11'></div>
            <div className='square' id='12'></div>
            <div className='square' id='13'></div>
            <div className='square' id='14'></div>
            <div className='square' id='15'></div>
            <div className='square' id='16'></div>
            <div className='square' id='17'></div>
            <div className='square' id='18'></div>
            <div className='square' id='19'></div>
            <div className='square' id='20'></div>
            <div className='square' id='21'></div>
            <div className='square' id='22'></div>
            <div className='square' id='23'></div>
            <div className='square' id='24'></div>
            <div className='square' id='25'></div>
            <div className='square' id='26'></div>
            <div className='square' id='27'></div>
            <div className='square' id='28'></div>
            <div className='square' id='29'></div>
            <div className='square' id='30'></div>
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
        justicfy-content: center;
        align-items: center;
    }
`;