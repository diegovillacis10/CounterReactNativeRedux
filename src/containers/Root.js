import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';

import CounterContainer from './CounterContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
