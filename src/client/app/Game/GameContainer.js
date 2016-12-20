import React from 'react';
import { connect } from 'react-redux';
import {
    startGame,
    toggleFeedback,
    silenceTask,
    updateScore,
    nextTask
} from './GameActions';
import Game from './Display/Game';



const mapStateToProps = (state) => {
  return state.toJS();
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleStart: () => {
      dispatch(startGame());
      dispatch(nextTask());
    },
    handleGrading: (input) => {
      dispatch(updateScore(input));
      dispatch(toggleFeedback());
    },
    handleNextTask: () => {
      dispatch(toggleFeedback());
      dispatch(nextTask());
    },
    handleFinishedPlaying: () => {
      dispatch(silenceTask());
    }
  };
};

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

export default GameContainer;
