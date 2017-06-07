import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, reset } from '../actions';

const mapStateToProps = state => ({ value: state })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer;
