import React, { useContext } from 'react'
// import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { TaskContext } from '../../context/todoContext'
// import { COMPLETE_TASK, DELETE_TASK } from '../../types'

const CardTask = styled.div`
    width: 90%;
    min-height: 4.5rem;
    background-color:#131415;
    color: white;
    word-wrap: break-word;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: relative;
`

const ButtonDelete = styled.button`
  border: none;
  border-radius: 45%;
  outline: none;
  color: white;
  background-color: #f03333;
  font-size: 1.2rem;
  padding: .5rem 1rem;
  position: absolute;
  right: 1rem;
  cursor: pointer;

`
const ButtonComplete = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.completed ? "green" : "#f03333"};
  font-size: 1.5rem;
  cursor: pointer;
`

const TaskCard = ({task}) => {
  const {tasks, setTasks, updateLocal} = useContext(TaskContext)
  const deleteTask = ()=>{
    setTasks(tasks.filter(($task) => $task.text !== task.text))
  updateLocal(tasks)

  }
  const completeTask = ()=>{
    const completeTask = tasks.map(($task) => {
      return $task.text === task.text
        ? { ...$task, completed: !$task.completed }
        : $task;

    })
    setTasks(completeTask)
    updateLocal(tasks)
  }
  return (
    <CardTask>
        <ButtonComplete completed={task.completed} onClick={completeTask}>{task.completed ? "✔" : "❌"}</ButtonComplete>
        <h2 >{task.text}</h2>
        <ButtonDelete onClick={deleteTask} >X</ButtonDelete>
    </CardTask>
  )
}

export default TaskCard