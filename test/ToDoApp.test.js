import jest from 'jest-mock'
import ToDoApp from '../src/modules/todo/ToDoApp'

const todoApp = new ToDoApp()
describe('DeleteItem on ToDoApp Component', function() {
  beforeEach(() => {
    todoApp.state = {
      todoList: [
        { id: 'd8438880-83f9-11e8-9a67-b125fa1acf93', todo: 'aa', bool: false },
        { id: 'dc2de210-83f9-11e8-9a67-b125fa1acf93', todo: 'bb', bool: false },
        { id: 'de6f6da0-83f9-11e8-9a67-b125fa1acf93', todo: 'cc', bool: false }
      ]
    }
    todoApp.setState = jest.fn()
  })

  it('this.setState on deleteItem should be call once', function() {
    todoApp.deleteItem('d8438880-83f9-11e8-9a67-b125fa1acf93')
    //console.log('todoApp.setState', todoApp.setState.mock.calls[0][0].todoList)
    expect(todoApp.setState.mock.calls.length === 1).toBeTruthy()
  })

  it('deleteItem should return output correctly', function() {
    todoApp.deleteItem('d8438880-83f9-11e8-9a67-b125fa1acf93')
    expect(todoApp.setState.mock.calls[0][0].todoList).not.toContain([
      { id: 'd8438880-83f9-11e8-9a67-b125fa1acf93', todo: 'aa', bool: false }
    ])
  })

  it('deleteItem should handle undefined id correctly', function() {
    todoApp.deleteItem()
    expect(todoApp.setState.mock.calls[0][0].todoList.length).toBe(3)
  })
})

describe('addItem on ToDoApp Component', function() {
  beforeEach(() => {
    todoApp.state = {
      todoList: [
        { id: 'd8438880-83f9-11e8-9a67-b125fa1acf93', todo: 'aa', bool: false },
        { id: 'dc2de210-83f9-11e8-9a67-b125fa1acf93', todo: 'bb', bool: false },
        { id: 'de6f6da0-83f9-11e8-9a67-b125fa1acf93', todo: 'cc', bool: false }
      ]
    }
    todoApp.setState = jest.fn()
  })
  it('this.setState on addTodo should be call once', function() {
    todoApp.addTodo('wash dish')
    expect(todoApp.setState.mock.calls.length === 1).toBeTruthy()
  })
  it('addTodo should handle undefined task correctly', function() {
    todoApp.addTodo()
    expect(todoApp.setState.mock.calls[0][0].todoList.length).toBe(4)
  })
  it('addTodo should works correctly', function() {
    todoApp.addTodo('clean room')
    expect(todoApp.setState.mock.calls[0][0].todoList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          todo: 'clean room'
        })
      ])
    )
  })
})

describe('showOption on ToDoApp Component', function() {
  beforeEach(() => {
    todoApp.state = {
      option: 'test'
    }
    todoApp.setState = jest.fn()
  })
  it('showOption should set state to all', function() {
    todoApp.showOption('all')
    expect(todoApp.setState.mock.calls[0][0].option).toEqual('all')
  })
  it('showOption should set state to active', function() {
    todoApp.showOption('active')
    expect(todoApp.setState.mock.calls[0][0].option).toEqual('active')
  })
  it('showOption should set state to complete', function() {
    todoApp.showOption('complete')
    expect(todoApp.setState.mock.calls[0][0].option).toEqual('complete')
  })
})

describe('checkAll on ToDoApp Component ', function() {
  beforeEach(() => {
    todoApp.state = {
      todoList: [
        { id: '1', todo: 'aa', bool: false },
        { id: '2', todo: 'bb', bool: false }
      ],
      checks: [],
      status: true
    }
    todoApp.setState = jest.fn()
  })
  it('checkAll should change all bool correctly', function() {
    todoApp.checkAll()
    expect(todoApp.setState.mock.calls[0][0].todoList).toEqual([
      { id: '1', todo: 'aa', bool: true },
      { id: '2', todo: 'bb', bool: true }
    ])
    expect(todoApp.setState.mock.calls[0][0].checks).toEqual([
      { id: '1', todo: 'aa', bool: true },
      { id: '2', todo: 'bb', bool: true }
    ])
    expect(todoApp.setState.mock.calls[0][0].status).toBe(false)
  })
})
