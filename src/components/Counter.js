import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Text, View } from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const Counter = ({ value }) => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{ fontSize: 30 }}>{value}</Text>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
      <Button
        onPress={onButtonPress}
        title='+'
        color='#2196F3'
      />
      <Button
        onPress={onButtonPress}
        title='-'
        color='#2196F3'
      />
    </View>

  </View>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
