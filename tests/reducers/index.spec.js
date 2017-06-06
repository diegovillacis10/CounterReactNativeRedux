import { increment } from '../../src/actions'
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
})
