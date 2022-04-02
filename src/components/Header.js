import React from 'react';

export const Header = () => {
    return (
        <h1 style={style}>Wordle</h1>
    );
};

const style = {
    borderBottom: '1px solid gray',
    textAlign: 'center'
};