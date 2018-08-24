import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter({ todos, clearComplete, showOption }) {
  let cnt = todos.filter(todo => todo.bool == false)
  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>{cnt.length} items left</p>
      <ToDoFooterFilters showOption={showOption} />
      <button
        style={styles.footerFilters.button}
        onClick={() => clearComplete()}
      >
        Clear completed
      </button>
    </div>
  )
}

function ToDoFooterFilters({ showOption }) {
  return (
    <div style={styles.footerFilters.container}>
      <button
        style={styles.footerFilters.button}
        onClick={() => showOption('all')}
      >
        All
      </button>
      <button
        style={styles.footerFilters.button}
        onClick={() => showOption('active')}
      >
        Active
      </button>
      <button
        style={styles.footerFilters.button}
        onClick={() => showOption('complete')}
      >
        Completed
      </button>
    </div>
  )
}
