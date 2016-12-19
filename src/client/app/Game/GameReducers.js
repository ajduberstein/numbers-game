import * as gameActions from './GameActions';
import { Record  } from 'immutable';

const GameState = new Record({
  currentTask: null,
  hasBegun: false,
  audioShouldPlay: false,
  tasksCorrect: 0,
  totalTasks: 0
});

const gameReducer = (state = new GameState(), {payload, type}) => {
  switch (type) {
    case gameActions.START_GAME:
      return state.merge({hasBegun: true});

    case gameActions.UPDATE_SCORE:
        return state.merge({
            tasksCorrect: state.tasksCorrect + payload.gotTaskRight,
            totalTasks: state.totalTasks++
        });

    case gameActions.NEXT_TASK:
      return state.merge({currentTask: payload.currentTask, audioShouldPlay: true});

    case gameActions.SILENCE_TASK:
      return state.merge({audioShouldPlay: false});

    default:
      return state;
  }
}

export default gameReducer;
