import * as gameActions from './GameActions';
import { Record  } from 'immutable';
import {getListLevenshtein} from './GameUtils';

const GameState = new Record({
  currentTask: null,
  hasBegun: false,
  audioShouldPlay: false,
  tasksCorrect: 0,
  digitsCorrect: 0,
  totalDigits: 0,
  totalTasks: 0
});

const gameReducer = (state = new GameState(), {payload, type}) => {
  switch (type) {
    case gameActions.START_GAME:
      return state.merge({hasBegun: true});

    case gameActions.UPDATE_SCORE:
        let digitsCorrect = getListLevenshtein(state.currentTask.toJS(), payload.inputArray);
        debugger;
        return state.merge({
            tasksCorrect: state.tasksCorrect + 1,
            digitsCorrect: state.currentTask.toJS().length - digitsCorrect,
            totalDigits: state.digitsCorrect + state.currentTask.toJS().length,
            totalTasks: state.totalTasks + 1
        });

    case gameActions.NEXT_TASK:
        return state.merge({
            currentTask: payload.nextTask,
            audioShouldPlay: true
        });

    case gameActions.SILENCE_TASK:
      return state.merge({audioShouldPlay: false});

    default:
      return state;
  }
}

export default gameReducer;
