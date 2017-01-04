import * as actions from './GameActions';
import * as sinon from 'Sinon';


describe('actions.updateScore', () => {
  it('should create an action with an updated score', () => {
    const expectedAction = {
      type: actions.UPDATE_SCORE,
      payload: {inputArray: ['0', '1', '0']}
    };
    expect(actions.updateScore('01 0')).toEqual(expectedAction)
  })
})

describe('actions.startGame', () => {
  it('should create an action to start game', () => {
    const expectedAction = {
      type: actions.START_GAME,
    };
    expect(actions.startGame()).toEqual(expectedAction)
  })
})

describe('actions.nextTask', () => {
  it('should create an action to load next task', () => {
    const arr = [4, 4, 4, 4, 4];
    sinon.stub('makeRandomArray').returns(arr);
    const expectedAction = {
        type: actions.NEXT_TASK,
        payload: {nextTask: arr}
    };
    expect(actions.nextTask()).toEqual(expectedAction)
  })
})
