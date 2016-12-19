import React from 'react';
import { Input, Form} from 'semantic-ui-react';
import AudioPlayer from './AudioPlayer';

class Gunplay extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let index = event.nativeEvent.target.selectedIndex;
        let text = event.nativeEvent.target[index].text;
        console.log(text);
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
            submissionForm = (
                <div>
                <label>Type the numbers that you heard</label>
                <Input name='main' onSubmit={this.onSubmit}/>
                </div>
            );
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
