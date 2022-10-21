import React from 'react'
import styled from 'styled-components'
import TaskCard from '../TaskCard/TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../../context/todoContext'
const TaskContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
`

const ContainerTasks = () => {
  const {tasks} = useContext(TaskContext)
  if (tasks.length === 0) {
    return
  }
  return (
    <TaskContainer>
      {tasks.map(task =>
       <TaskCard key={task.text}  task={task}/>
    )}</TaskContainer>
  )
}

export default ContainerTasks