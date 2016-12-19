import React from 'react';
import {XYPlot, MarkSeries, LineSeries} from 'react-vis';

const INCREMENT = 1000;
const ARRAY_LENGTH = 12*INCREMENT;
const RADIUS = 100;
const COLORS = ['#569FD3', '#F9C802', '#E10001', '#66BF02', '#E87A14'];

const randomData = () => {
    let dataXY = [...Array(ARRAY_LENGTH)];
    dataXY.map(
        (x, i) => dataXY[i] = {
            x: Math.cos(i + 1)*Math.tan(i + 1)*Math.sin(1/(i + 2)) - 600,
            y: i + 1,
            size: RADIUS*Math.abs(Math.sin(i + 1)),
            color: COLORS[i % COLORS.length]
        }
    );
    return dataXY;
};

class MusicAnimationChild extends React.Component {

    render () {
        return (<XYPlot
          width={650}
          height={300}
          animation={true}
          colorType={'literal'}
          colorDomain={[0, 100]}
          colorRange={[0, 10]}
          >
          <MarkSeries
            data={this.props.data}
          />
          </XYPlot>
        )

    }
};


class MusicAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: randomData(),
            idx: INCREMENT
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount () {
        this.timer = setInterval(this.tick, this.props.waitTime);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isPlaying) {
            clearInterval(this.timer);
        }
    }

    tick() {
        console.log(this.state.idx);
        this.setState({idx: (this.state.idx + INCREMENT) % ARRAY_LENGTH});
    }

    render () {
        let dataXY = this.state.data.slice(this.state.idx, this.state.idx + INCREMENT);
        if (this.props.isPlaying && dataXY.length > 0) {
            let periods = '.'.repeat(this.state.idx % 3);
            let playString = 'Reading numbers.' + periods;
            return (
                <div>
                <p> {playString} </p>
                <MusicAnimationChild data={dataXY}/>
                </div>
            );
        } else
            return (<div></div>)
    }
}

export default MusicAnimation;
