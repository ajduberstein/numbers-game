import React from 'react';
import {render} from 'react-dom';
import {Container, Grid, Button, Header} from 'semantic-ui-react'

export default class Game extends React.Component {
    render () {
        let button;
        if (!this.props.hasBegun) button = <Button size='massive' onPress={this.props.handleStart}>Begin</Button>;
        return (<Container>
           <Grid centered padded columns={1}>
            <Grid.Column>
                <Container text >
                    <Header as='h1'>Mandarin Numbers</Header>
                    <p> We'll read off a series of random numbers. Input the numbers you hear back.</p>
                    {button}
                </Container>
            </Grid.Column>
        </Grid>
        </Container>);
    }
}
