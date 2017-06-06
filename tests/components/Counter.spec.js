import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../src/components/Counter'

describe('counter', () => {
  it('should render', () => {
    const wrapper = shallow(<Counter value={8} increment={() => {}} />)
    const wrapperText = wrapper.find('Text').at(1).prop('children');

    expect(wrapperText).toEqual(8)
  })

  it('should increment', () => {
    const increment = jest.fn()
    const wrapper = shallow(<Counter value={8} increment={increment} />)

    wrapper.find('Button').at(0).simulate('press')

    expect(increment).toHaveBeenCalled()
  })
})
