import { GRAY, YELLOW, GREEN } from '../redux/constants';

export function getColor(index, letter, answer) {
    const include = answer.includes(letter);

    if (!include) return GRAY;
    if (answer[index] === letter) return GREEN;

    return YELLOW;
}