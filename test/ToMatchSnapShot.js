import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/Test.js'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import List from '../src/List.js'
import ToDoForm from '../src/modules/todo/ToDoForm'
import sinon from 'sinon'
import jest from 'jest-mock'

describe('Component: App', () => {
  const items = ['Learn react', 'rest', 'go out']

  it('should match its empty snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should add an item based on the value in the state', () => {
    const component = shallow(<App />)
    const preventDefault = jest.fn()
    component.setState({
      items
    })
    component.find('form').simulate('submit', { preventDefault })
    expect(toJson(component)).toMatchSnapshot()
    expect(preventDefault).toBeCalled()
  })
  it('should pass a selected value to the onChange function', () => {
    const component = shallow(<App />)
    component.find('input').simulate('change', {
      target: {
        value: 'Change function'
      }
    })

    expect(toJson(component)).toMatchSnapshot()
  })
  it('should render a todo item ', () => {
    const tree = toJson(shallow(<List items={[]} />))
    expect(tree).toMatchSnapshot()
  })
  it('should match its snapshot with items', () => {
    const items = ['Learn react', 'rest', 'go out']
    const tree = renderer.create(<List items={items} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ToDoForm ', () => {
  it('TodoFrom can render', () => {
    const wrapper = shallow(<ToDoForm addTodo={() => {}} checkAll={() => {}} />)
    expect(wrapper).toMatchSnapshot()
  })

  // it('TodoFrom can render', () => {
  //   const spy = jest.fn()
  //   const wrapper = mount(<ToDoForm addTodo={() => {}} checkAll={spy} />)
  //   wrapper.find('button').simulate('click')
  //   expect(spy.calledOnce).toBe(true)
  // })
})
