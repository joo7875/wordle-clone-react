import React from 'react';
import styled from 'styled-components';

export const KeyBoard = () => {
    return (
        <>
            <Row>
                <button id='q'>q</button>
                <button id='w'>w</button>
                <button id='e'>e</button>
                <button id='r'>r</button>
                <button id='t'>t</button>
                <button id='y'>y</button>
                <button id='u'>u</button>
                <button id='i'>i</button>
                <button id='o'>o</button>
                <button id='p'>p</button>
            </Row>
            <Row>
                <div id='space-half'></div>
                <button id='a'>a</button>
                <button id='s'>s</button>
                <button id='d'>d</button>
                <button id='f'>f</button>
                <button id='g'>g</button>
                <button id='h'>h</button>
                <button id='j'>j</button>
                <button id='k'>k</button>
                <button id='l'>l</button>
                <div id='space-half'></div>
            </Row>
            <Row>
                <button id='enter'>Enter</button>
                <button id='z'>z</button>
                <button id='x'>x</button>
                <button id='c'>c</button>
                <button id='v'>v</button>
                <button id='b'>b</button>
                <button id='n'>n</button>
                <button id='m'>m</button>
                <button id='del'>Del</button>
            </Row>
        </>
    );
};

const Row = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto 8px;
    touch-action: manipulation;
    width: 100%;

    button {
        background-color: lightgray;
        border: 0;
        padding: 0;
        cursor: pointer;
        font-weight: bold;
        user-select: none;
        text-transform: uppercase;
        height: 58px;
        flex-grow: 1;
        margin-right: 6px;
        border-radius: 4px;
    }

    #space-half {
        flex-grow: 0.5;
    }
`;