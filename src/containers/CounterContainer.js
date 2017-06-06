import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment } from '../actions';

const mapStateToProps = state => ({ value: state })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment())
})

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer;
