const NUM_FILES = 10;
const AUDIO_FILES = [...new Array(NUM_FILES)].map(
    (_, i) => new Audio(`static/audio/CH_${i}.m4a`)
);
const MILLISECONDS_TO_WAIT = 200;

class AudioPlayer {
    constructor(currentTask) {
        this.currentTask = currentTask;
        this.playTrack = this.playTrack.bind(this)
        this.play = this.play.bind(this)
    }

    playTrack(trackNum) {
        AUDIO_FILES[trackNum].play()
    }

    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    play() {
        var current = Promise.resolve();
        Promise.all(this.currentTask.map((id) => {
            current = current.then(() => {
                return this.sleep(500).then(
                    () => (this.playTrack(id))
                )
            });
            return current;
        })).then(function(results) {
            console.log('done');
        })
    }
}

export default AudioPlayer;
