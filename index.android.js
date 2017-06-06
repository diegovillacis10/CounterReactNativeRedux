import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Root from './src/containers/Root';
import configureStore from './src/configureStore';

export default class CounterReactNativeRedux extends Component {
  render() {
    return (<Root store={configureStore()} />)
  }
}

AppRegistry.registerComponent('CounterReactNativeRedux', () => CounterReactNativeRedux);
