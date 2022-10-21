import React from 'react'
import Wrapper from "../../components/GeneralWrapper/Wrapper";
import ContainerTodo from "../../components/containerTodo/ContainerTodo";
import FormTodo from "../../components/FormTodo/FormTodo";
import ContainerTasks from "../../components/ContainerTasks/ContainerTasks";
// import { useSelector } from "react-redux";

// const Todo = () => {
//   //redux
//     const state = useSelector((state) => state.todo);
//     localStorage.setItem("tasks", JSON.stringify(state));
//   return (
//        <Wrapper >
//         <ContainerTodo>
//           <FormTodo tasks={state}></FormTodo>
//           <ContainerTasks tasks={state}></ContainerTasks>
//         </ContainerTodo>
//       </Wrapper> 
//   )
// }

const Todo = () => {
  //apiContext
  return (
       <Wrapper >
        <ContainerTodo>
            <FormTodo ></FormTodo>
            <ContainerTasks></ContainerTasks>
        </ContainerTodo>
      </Wrapper> 
  )
}

export default Todo