import {makeRandomArray, getListLevenshtein} from './GameUtils';

export const NEXT_TASK = 'NEXT_TASK';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const START_GAME  = 'START_GAME';


// TODO 'Actions must be plain objects' - resolve error
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
    let taskList = makeRandomArray(10, 10);
    return {
        type: NEXT_TASK,
        payload: {
            taskList: taskList
        }
    };
}
