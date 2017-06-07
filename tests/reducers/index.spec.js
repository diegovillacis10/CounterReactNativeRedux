import { increment, decrement } from '../../src/actions'
import reducer from '../../src/reducers'

describe('reducer', () => {
  it('should set initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })

  it('should increment state by 1', () => {
    expect(
      reducer(0, increment())
    ).toEqual(1)
  })

  it('should decrement state by 1', () => {
    expect(
      reducer(1, decrement())
    ).toEqual(0)
  })
})
