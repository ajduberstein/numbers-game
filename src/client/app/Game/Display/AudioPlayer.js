// TODO redo with audio sprite, need new audio
import { Howl } from 'Howler';


class AudioPlayer {
    constructor(currentTask) {
        this.currentTask = currentTask;
        this.play = this.play.bind(this);
        this.sound = new Howl({
          src: ['static/audio/CN.mp3'],
          sprite: {
            1: [250, 350],
            2: [700, 600],
            3: [1410, 700],
            4: [2300, 800],
            5: [3200, 900],
            6: [4100, 750],
            7: [5200, 400],
            8: [5900, 400],
            9: [6800, 600],
            0: [7600, 850],
            silence: [9001, 250]
          }
        });
    }

    playTrackName(name) {
        this.sound.play(name.toString());
    }

    *play() {

    }
}

export default AudioPlayer;
