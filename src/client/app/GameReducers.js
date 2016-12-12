import * as gameActions from './GameActions';
import { Record  } from 'immutable';

export const GameState = new Record({
  currentTask: null,
  active: false,
  tasksCorrect: 0,
  totalTasks: 0
});

export default function gameReducer(state = new GameState(), {payload, type}) {
  switch (type) {
    case gameActions.START_GAME:
      return state.set('active', true);

    case gameActions.UPDATE_SCORE:
        return state.merge({
            tasksCorrect: state.tasksCorrect + payload.gotTaskRight,
            totalTasks: state.totalTasks++
        });

    case gameActions.NEXT_TASK:
      return state.set('currentTask', payload.nextTask);

    default:
      return state;
  }
}
