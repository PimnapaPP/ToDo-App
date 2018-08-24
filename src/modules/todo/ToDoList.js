import React from 'react'
import styles from './ToDoStyles'

function ToDoItem(props) {
  return (
    <li className="todo-item" style={styles.todoItem}>
      <input
        checked={props.todo.bool}
        type="checkbox"
        style={styles.todoItemCheckBox}
        onChange={() => {
          props.todo.bool = !props.todo.bool
          props.checkTodo(props.todo.todo, props.todo.id, props.todo.bool)
        }}
      />

      <span>{props.todo.todo}</span>
      <button
        className="delete-item"
        style={styles.todoItemDelete}
        defaultChecked
        onClick={() => props.deleteItem(props.todo.id)}
      >
        X
      </button>
    </li>
  )
}

export default function ToDoList(props) {
  let renderArr = props.todos
  if (props.option === 'all') {
    renderArr = props.todos
  } else if (props.option === 'complete') {
    renderArr = props.checks
  } else {
    let onlyInTodos = props.todos.filter(props.comparer(props.checks))
    let onlyInChecks = props.checks.filter(props.comparer(props.todos))
    renderArr = onlyInTodos.concat(onlyInChecks)
  }
  return (
    <ul>
      {renderArr
        .slice(0)
        .reverse()
        .map((todo, index) => (
          <ToDoItem
            key={todo + index}
            todo={todo}
            deleteItem={props.deleteItem}
            index={index}
            checkTodo={props.checkTodo}
            checkAll={props.checkAll}
            comparer={props.comparer}
          />
        ))}
    </ul>
  )
}
