import { Provider } from 'react-redux'
import GameContainer from './GameContainer';
import * as actions from './GameActions';
import * as redux from 'react-redux';
import React from 'react';
import configureStore from 'redux-mock-store'
import {shallow} from 'enzyme';

const middlewares = []
const mockStore = configureStore(middlewares)



describe('connect', () => {
    it('connect actions to the store', () => {
        const component = shallow(
            <Provider store={store}>
              <GameContainer />
            </Provider>
        );
        expect(redux.connect).toHaveBeenCalled();
    });
});
