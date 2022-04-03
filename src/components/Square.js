import React from 'react';

import { GetCurrentRow } from '../utils/GetCurrentRow';

export const Square = ({ order, index }) => {

    let result = GetCurrentRow(order);

    return (
        <div className='square' id={`${order}${index}`}>{result[index]}</div>
    );
}
