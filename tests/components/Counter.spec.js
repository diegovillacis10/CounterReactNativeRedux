import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../src/components/Counter'

describe('counter', () => {
  it('should render', () => {
    const wrapper = shallow(<Counter value={8} increment={() => {}} decrement={() => {}} reset={() => {}} />)
    const wrapperText = wrapper.find('Text').at(1).prop('children');

    expect(wrapperText).toEqual(8)
  })

  it('should increment', () => {
    const increment = jest.fn()
    const wrapper = shallow(<Counter value={8} increment={increment} decrement={() => {}} reset={() => {}} />)

    wrapper.find('Button').at(0).simulate('press')

    expect(increment).toHaveBeenCalled()
  })

  it('should decrement', () => {
    const decrement = jest.fn()
    const wrapper = shallow(<Counter value={8} increment={() => {}} decrement={decrement} reset={() => {}} />)

    wrapper.find('Button').at(1).simulate('press')

    expect(decrement).toHaveBeenCalled()
  })

  it('should reset to 0', () => {
    const reset = jest.fn()
    const wrapper = shallow(<Counter value={8} increment={() => {}} decrement={() => {}} reset={reset} />)

    wrapper.find('Button').at(2).simulate('press')

    expect(reset).toHaveBeenCalled()
  })
})
