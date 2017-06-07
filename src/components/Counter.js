import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Text, View } from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const Counter = ({ value, increment, decrement, reset }) => (
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
        title='Increment'
        color='#2196F3'
      />
      <Button
        onPress={ decrement }
        title='Decrement'
        color='#2196F3'
      />
      <Button
        onPress={ reset }
        title='Reset'
        color='#2196F3'
      />
    </View>
  </View>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default Counter;
