import React from 'react'
import { connect } from 'react-redux'
import { startGame, updateScore, nextTask } from './GameActions';
import Game from './Display/Game';


const mapStateToProps = (state) => {
  return state.toJS();
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch(startGame());
      dispatch(nextTask());
    }
  }
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
