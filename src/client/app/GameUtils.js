import levenshtein from 'fast-levenshtein';

export function makeRandomArray(length, max){
    return [...new Array(length)].map((_, i) => Math.round(Math.random() * max));
}

export function getListLevenshtein(v1, v2) {
    let vals = [v1.toString(), v2.toString()];
    let distance = levenshtein.get(vals[0], vals[1]);
    return distance;
}
