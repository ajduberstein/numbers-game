import {makeRandomArray, getListLevenshtein} from './GameUtils';

export const NEXT_TASK = 'NEXT_TASK';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const START_GAME  = 'START_GAME';
export const SILENCE_TASK  = 'SILENCE_TASK';


export const startGame = () => {
    return {
        type: START_GAME
    };
}

export const updateScore = (input, currentValues) => {
    let numCorrect = 0;

    return {
        type: UPDATE_SCORE,
        payload: {
            gotTaskRight: distance === 0
        }
    };
};

export const nextTask = () => {
    let taskList = makeRandomArray({arrayLength: 10, greatestInteger: 9});
    return {
        type: NEXT_TASK,
        payload: {
            currentTask: taskList
        }
    };
};

export const silenceTask = () => {
    return {
        type: SILENCE_TASK
    };
};
