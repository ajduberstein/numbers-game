import React from 'react';
import AudioPlayer from './AudioPlayer';

class Gunplay extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <p>BRO</p>
                <AudioPlayer
                    currentTask={this.props.currentTask}
                />
            </div>
        );
    }
}

export default Gunplay;
