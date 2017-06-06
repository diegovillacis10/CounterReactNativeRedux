import React from 'react'
import { shallow } from 'enzyme'
import 'jest-enzyme'

import { Provider } from 'react-redux'
import configureStore from '../../src/configureStore'

import Root from '../../src/containers/Root'
import CounterContainer from '../../src/containers/CounterContainer'

describe('Root', () => {
  const store = configureStore()
  const wrapper = shallow(<Root store={store} />)

  it('should render CounterContainer component', () => {
    expect(wrapper.contains(<CounterContainer />)).toBe(true)
    // expect(wrapper).toContainReact(<CounterContainer />)
  })

  it('should connect to redux', () => {
    expect(wrapper.find(Provider)).toBePresent()
  })
})
