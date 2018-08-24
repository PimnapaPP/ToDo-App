import jest from 'jest-mock'
import ToDoApp from '../src/modules/todo/ToDoApp'
import ToDoForm from '../src/modules/todo/ToDoForm'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import React from 'react'

describe('ToDoApp ', () => {
  it('render ToDoForm', () => {
    const wrapper = shallow(<ToDoApp />)
    expect(wrapper.find('ToDoForm').length == 1).toBeTruthy()
  })
  // it('simulate click events', () => {

  //   const wrapper = shallow(<ToDoForm />)
  //   expect(wrapper.find('<div style={styles.body} >').length == 1).toBeTruthy()
  // })
})
