import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Text, View } from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const Counter = ({ value, increment }) => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{ fontSize: 30 }}>Counter</Text>
    <Text style={{ fontSize: 30 }}>{value}</Text>
    <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
      <Button
        onPress={ increment }
        title='+'
        color='#2196F3'
      />
      <Text> </Text>
      <Button
        onPress={onButtonPress}
        title='-'
        color='#2196F3'
      />
    </View>
  </View>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default Counter;
