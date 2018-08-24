import React, { Component } from 'react'

const TodoContext = React.createContext()

export default class TodoProvider extends Component {
  state = {
    todo: 'first task',
    todoList: []
  }

  render() {
    return (
      <TodoContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </TodoContext.Provider>
    )
  }
}
