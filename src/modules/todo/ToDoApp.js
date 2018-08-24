import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'
import styles from './ToDoStyles'
const uuidv1 = require('uuid/v1')

export default class ToDoApp extends React.Component {
  state = {
    todo: 'first',
    todoList: [],
    checks: [],
    option: 'all',
    status: true
  }

  addTodo = (task = '') => {
    this.setState({
      todoList: this.state.todoList.concat({
        id: uuidv1(),
        todo: task,
        bool: false
      })
    })
  }

  deleteItem = (id = '') => {
    const todoList = this.state.todoList.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todoList })
  }

  checkTodo = (task, id, bool) => {
    //check which item in the array it is
    let arr = this.state.todoList
    let objIndex = arr.findIndex(obj => obj.id == id)

    //insert in checks array
    if (bool) {
      this.setState({
        checks: this.state.checks.concat({
          id: id,
          todo: task,
          bool: bool
        })
      })
      //set TodoList with checked mask
      arr[objIndex].bool = true
      this.setState({
        todoList: arr
      })

      // if uncheck, remove item in the checks array
    } else {
      arr[objIndex].bool = false
      const checkList = this.state.checks.filter(check => {
        return check.id !== id
      })
      this.setState({
        checks: checkList,
        todoList: arr
      })
    }
  }

  showOption = option => {
    if (option === 'all') {
      this.setState({
        option: 'all'
      })
    } else if (option === 'active') {
      this.setState({
        option: 'active'
      })
    } else {
      this.setState({
        option: 'complete'
      })
    }
  }

  checkAll = () => {
    let todos = this.state.todoList
    for (let i in todos) {
      todos[i].bool = this.state.status
    }
    if (this.state.status) {
      this.setState({
        todoList: todos,
        checks: todos,
        status: !this.state.status
      })
    } else {
      this.setState({
        todoList: todos,
        checks: [],
        status: !this.state.status
      })
    }
  }

  //function to compare differnt object between 2 arrays
  comparer = otherArray => {
    return function(current) {
      return (
        otherArray.filter(function(other) {
          return other.id == current.id && other.todo == current.todo
        }).length == 0
      )
    }
  }

  clearComplete = () => {
    let withOutCheck = this.state.todoList.filter(mask => mask.bool == true)
    let onlyInTodos = this.state.todoList.filter(this.comparer(withOutCheck))
    let onlyInWOA = withOutCheck.filter(this.comparer(this.state.todoList))
    let newArr = onlyInTodos.concat(onlyInWOA)
    this.setState({
      todoList: newArr,
      checks: []
    })
  }
  render() {
    return (
      <div style={styles.body}>
        <div style={styles.wrapper}>
          <div style={styles.app}>
            <ToDoForm addTodo={this.addTodo} checkAll={this.checkAll} />
            <ToDoList
              todos={this.state.todoList}
              deleteItem={this.deleteItem}
              checkTodo={this.checkTodo}
              checks={this.state.checks}
              option={this.state.option}
              comparer={this.comparer}
            />
            <ToDoFooter
              showOption={this.showOption}
              clearComplete={this.clearComplete}
              todos={this.state.todoList}
            />
          </div>
        </div>
      </div>
    )
  }
}
