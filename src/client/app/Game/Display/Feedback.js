import React from 'react';
import { Grid, Header, Statistic, Button } from 'semantic-ui-react';

class Feedback extends React.Component {
    render() {
        const right = this.props.digitsCorrect === this.props.currentTask.length;
        const color = right ? 'green' : 'red';
        const displayCorrect = this.props.digitsCorrect < 0 ? 0 : this.props.digitsCorrect;
        const msg =  right ? 'Perfect!' : 'Not quite!';
        return (
          <div>
          <Header color={color}> {msg} </Header>
          <Grid celled='internally' centered>
            <Grid.Column width={5}>
            <Grid.Row>
                <Statistic>
                <Statistic.Value color={color}
                    value={this.props.tasksCorrect} />
                  <Statistic.Label label='Total Aces' />
                </Statistic>

            </Grid.Row>
            <Grid.Row>

                <Statistic>
                  <Statistic.Value>{this.props.totalTasks}</Statistic.Value>
                  <Statistic.Label>Total Exercises</Statistic.Label>
                </Statistic>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={5}>
            <p>You entered: {this.props.userInput}</p>
            <p>Correct answer: {this.props.currentTask}</p>
          </Grid.Column>
          </Grid>
            <Button
                size='massive'
                onClick={this.props.handleNextTask}
            > Next question! 加油⛽️</Button>

          </div>
        )
    }
}

export default Feedback;
