import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Button } from './Button';

export const KeyBoard = () => {

    return (
        <>
            <Row>
                <Button index='q' />
                <Button index='w' />
                <Button index='e' />
                <Button index='r' />
                <Button index='t' />
                <Button index='y' />
                <Button index='u' />
                <Button index='i' />
                <Button index='o' />
                <Button index='p' />
            </Row>
            <Row>
                <div id='space-half'></div>
                <Button index='a' />
                <Button index='s' />
                <Button index='d' />
                <Button index='f' />
                <Button index='g' />
                <Button index='h' />
                <Button index='j' />
                <Button index='k' />
                <Button index='l' />
                <div id='space-half'></div>
            </Row>
            <Row>
                <Button index='enter' />
                <Button index='z' />
                <Button index='x' />
                <Button index='c' />
                <Button index='v' />
                <Button index='b' />
                <Button index='n' />
                <Button index='m' />
                <Button index='del' />
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

    #space-half {
        flex-grow: 0.5;
    }
`;