import { useDispatch } from "react-redux";

import { addLetter } from '../redux/actions';

export const KeyDown = (row_1) => {

    const dispatch = useDispatch();

    // const key = e.key;

    // dispatch(addLetter(key));
    console.log(row_1)
}