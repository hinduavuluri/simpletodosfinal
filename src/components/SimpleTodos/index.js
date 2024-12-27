import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todosList: initialTodosList, inputText: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredTodo = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredTodo})
  }

  changeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  addTodo = () => {
    const {inputText} = this.state
    const newTodo = {
      title: inputText,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      inputText: '',
    }))
  }

  saveExistingTask = (id, taskTitle) => {
    const {todosList} = this.state
    const newUpdatedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, title: taskTitle}
      }
      return each
    })
    this.setState({todosList: newUpdatedList})
  }

  render() {
    const {todosList, inputText} = this.state

    return (
      <div className="todo-container">
        <div className="todo-items-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-container">
            <input
              type="text"
              onChange={this.changeInputText}
              value={inputText}
              className="input-container"
              placeholder="Enter Todo item"
            />
            <button
              type="button"
              className="delete-button"
              onClick={this.addTodo}
            >
              Add
            </button>
          </div>
          <ul className="list-items">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                todoDetails={eachTodo}
                editedTask={this.saveExistingTask}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
