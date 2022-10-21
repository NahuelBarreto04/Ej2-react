import React from 'react'
import styled from 'styled-components'
const WrapperPokemon = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  width: 100%;
  & h2{
    color: white;
    font-size: 2rem;
  }
`



const PokeWrapper = ({children}) => {
    // if (isLoading) return <WrapperPokemon><h2>Loading...</h2></WrapperPokemon>
  
    // if (error) return <WrapperPokemon><h2>{'An error has occurred: ' + error.message}</h2></WrapperPokemon>
  return (
    <WrapperPokemon>{children}</WrapperPokemon>
  )
}

export default PokeWrapper