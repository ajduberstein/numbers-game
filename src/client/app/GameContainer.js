import React from 'react'
import { connect } from 'react-redux'
import { startGame, updateScore, nextTask } from './GameActions';
import Game from './Game';
import * as GameActions from './GameActions';


const mapStateToProps = (state) => {
  return {
    hasBegun: state.hasBegun,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch(GameActions.START_GAME)
    }
  }
};

const GameDisplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameDisplay
