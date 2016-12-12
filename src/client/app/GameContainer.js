import React from 'react'
import { connect } from 'react-redux'
import { startGame, updateScore, nextTask } from './GameActions';
import Game from './Game';


const mapStateToProps = (state) => {
  return {
    hasBegun: state.hasBegun,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch(startGame())
    }
  }
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
