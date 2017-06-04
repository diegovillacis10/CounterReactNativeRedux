import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Counter = ({ value }) => (
  <View>
    <Text>{value}</Text>
  </View>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
