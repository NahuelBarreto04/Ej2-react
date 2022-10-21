import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
// import { ADD_TASK, DELETE_ALL } from '../../types'
import { useContext } from 'react'
import { TaskContext } from '../../context/todoContext'


export const InputForm = styled.input`
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    padding-left: 1rem;


`
export const FormCont = styled.form`
    width: 90%;
    height: 10rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`
 export const ButtonTest = styled.button`
    min-width: 6rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    background-color: #4444e9;
    color: white;
    cursor: pointer;

`
const FormTodo = () => {
    //ApiContext
    const {tasks,setTasks,updateLocal} = useContext(TaskContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (e.target.task.value === "") {
            e.target.task.value = ""
            return alert("ingresa una tarea")
        }
        if (tasks.some(task => task.text.toLowerCase() === e.target.task.value.toLowerCase())) {
            e.target.task.value = ""
            return alert("esta tarea ya existe")
        }
        setTasks([...tasks, { text: e.target.task.value.trim(), completed: false }])
        e.target.task.value = ""
    }
    updateLocal(tasks)

  return (
    <FormCont onSubmit={handleSubmit}>
        <InputForm type="text" name='task' placeholder='Ingresa una tarea...'/>
        <ButtonTest>Save</ButtonTest>
        <ButtonTest type='button' onClick={()=>{
            updateLocal([])
            setTasks([])
        }}>Delete all</ButtonTest>
    </FormCont>
        

  )
}

export default FormTodo