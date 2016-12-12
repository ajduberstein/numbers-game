import React from 'react'
import { connect } from 'react-redux'
import { startGame, updateScore, nextTask } from './GameActions';
import Game from './Game';
import * as GameActions from './GameActions';

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.exampleStaticFunction = this.exampleStaticFunction.bind(this)
  }

  handleStart() {
    GameActions.startGame();
  }

  exampleStaticFunction(arg) {
    //staticFunction
  }

  render() {
    return (
      <Game
        hasBegun={this.props.hasBegun}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    hasBegun: state.hasBegun,
  }
}

connect(mapStateToProps)(GameContainer);
