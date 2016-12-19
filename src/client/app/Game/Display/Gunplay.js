import React from 'react';
import AudioPlayer from './AudioPlayer';

class Gunplay extends React.Component {

    constructor(props) {
        super(props);
        this.audio = new AudioPlayer(this.props.currentTask);
    }

    render () {
        this.audio.play();
        return (
            <div>
                <p>BRO</p>
                <p>{this.props.currentTask}</p>
            </div>
        );
    }
}

export default Gunplay;
