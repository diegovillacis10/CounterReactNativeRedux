import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const CounterContainer = connect(
  mapStateToProps
)(Counter)

export default CounterContainer;
