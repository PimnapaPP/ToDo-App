import React from 'react'
import styles from './ToDoStyles'

export default class ToDoForm extends React.Component {
  keyPress = e => {
    if (e.keyCode == 13) {
      e.preventDefault()
      this.props.addTodo(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="input"
            style={styles.todoInput}
            type="text"
            placeholder="Enter your task here..."
            onKeyDown={this.keyPress}
          />
        </form>
        <button
          style={styles.footerFilters.button}
          onClick={() => this.props.checkAll()}
        >
          Check all
        </button>
      </div>
    )
  }
}
