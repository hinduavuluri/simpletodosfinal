// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, editedTask} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  const [isEdit, setIsEdit] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)
  const [isChecked, setCheck] = useState(false)

  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }

  const onClickSaveBtn = () => {
    setIsEdit(false)
    editedTask(id, taskTitle)
  }

  const onClickCheckbox = event => {
    setCheck(event.target.checked)
  }

  const onClickEdit = () => {
    setIsEdit(true)
  }

  return (
    <li className="list-container">
      {isEdit ? (
        <div className="edit-container">
          <input
            type="text"
            onChange={onChangeTitle}
            className="text-edit-container"
            value={taskTitle}
          />
          <button
            type="button"
            className="save-edit-btn"
            onClick={onClickSaveBtn}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="save-container">
          <input
            type="checkbox"
            className="check-box-container"
            onClick={onClickCheckbox}
            checked={isChecked}
            id={id}
          />
          <p className="title">{title}</p>
          <button className="save-edit-btn" type="button" onClick={onClickEdit}>
            Edit
          </button>
        </div>
      )}
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
