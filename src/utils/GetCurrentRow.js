import { useSelector } from 'react-redux';

export function GetCurrentRow(order) {
    const { row_1, row_2, row_3, row_4, row_5, row_6 } = useSelector(state => state);

    let result;

    switch (order) {
        case 1: result = row_1; break;
        case 2: result = row_2; break;
        case 3: result = row_3; break;
        case 4: result = row_4; break;
        case 5: result = row_5; break;
        case 6: result = row_6; break;
        default: break;
    }

    return result;
};