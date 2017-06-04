import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => (
  <div>{value}</div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
