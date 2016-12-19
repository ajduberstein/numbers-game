import React from 'react';
import {render} from 'react-dom';
import {Container, Grid, Button, Header} from 'semantic-ui-react'
import Gunplay from './Gunplay'


export default class Game extends React.Component {

    render () {
        let mainDisplay;

        if (!this.props.hasBegun) {
            mainDisplay = (
                <div>
                <p>I'll read off a series of random numbers. Type for me the numbers that you hear.</p>
                <Button size='massive' onClick={this.props.handleStart}>Begin</Button>
                </div>
            );
        } else {
            mainDisplay = (<Gunplay {...this.props}/>)
        }

        return (<Container>
           <Grid centered padded columns={1}>
            <Grid.Column>
                <Container text >
                    <Header as='h1'>Mandarin Numbers</Header>
                    {mainDisplay}
                </Container>
            </Grid.Column>
        </Grid>
        </Container>);
    }
}
