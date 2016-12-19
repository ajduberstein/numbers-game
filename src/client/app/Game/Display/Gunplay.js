import React from 'react';
import { Input, Form} from 'semantic-ui-react';
import AudioPlayer from './AudioPlayer';

class Gunplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainInput: 'waiting...'
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.handleGrading(this.state.mainInput);
    }

    handleOnChange(e) {
        let text = e.target.value;
        this.setState({mainInput: text});
    }

    render () {
        let audioPlayer, submissionForm;
        if (this.props.audioShouldPlay) {
            audioPlayer = (
                <AudioPlayer
                    currentTask={this.props.currentTask}
                    onFinishedPlaying={this.props.handleFinishedPlaying}
                />
            );

        } else {
            submissionForm = (<Form name='main' onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>Type the numbers that you heard</label>
                  <Input onChange={this.handleOnChange} value={this.state.value} />
                </Form.Field>
            </Form>);
        }
        return (
            <div>
                {audioPlayer}
                {submissionForm}
                {this.props.currentTask}
            </div>
        );
    }
}

export default Gunplay;
