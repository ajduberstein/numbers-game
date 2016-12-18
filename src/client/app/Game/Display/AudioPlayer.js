// TODO redo with audio sprite, need new audio
const NUM_FILES = 10;
const AUDIO_FILES = [...new Array(NUM_FILES)].map(
    (_, i) => new Audio(`static/audio/CH_${i}.m4a`)
);
const MILLISECONDS_TO_WAIT = 200;

class AudioPlayer {
    constructor(currentTask) {
        this.currentTask = currentTask;
        this.play = this.play.bind(this)
    }

    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    play() {
        let current = Promise.resolve();
        Promise.all(this.currentTask.map((id) => {
            current = current.then(() => {
                return this.sleep(1500).then(
                    () => (AUDIO_FILES[id].play())
                )
            });
            return current;
        })).catch(console.log.bind(console))
    }
}

export default AudioPlayer;
