import React from 'react'
import { TodoContainerStyles } from './ContainerTodoStyle'

function ContainerTodo({children}) {
  return (
<TodoContainerStyles>{children}</TodoContainerStyles>
  )
}

export default ContainerTodo