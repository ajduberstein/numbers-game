import * as sinon from 'Sinon';

import Game from './Display/Game';
import * as actions from './GameActions';
import * as redux from 'react-redux';

import {shallow} from 'enzyme';

describe('connect', () => {
    it('connect actions to the store', () => {
        const component = shallow(<Game />);
        expect(redux.connect).toHaveBeenCalled();
    });
});
