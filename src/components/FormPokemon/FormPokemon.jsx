import React, { createContext } from 'react'
import styled from 'styled-components'
import { ButtonTest, InputForm } from '../FormTodo/FormTodo'


const FormPoke = styled.form`
  min-width: 40rem;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`
const FormPokemon = ({pokeInfoSubmit}) => {
  return (
    <FormPoke onSubmit={pokeInfoSubmit} >
        <InputForm type="text" name='pokeInput' placeholder='Ingresa un pokemon...'/>
        <ButtonTest>Search</ButtonTest>
    </FormPoke>
    
  )
}


export default FormPokemon