import React, { useState } from 'react'
import styled from 'styled-components'
import FormPokemon from '../../components/FormPokemon/FormPokemon'
import { WrapperContainer } from '../../components/GeneralWrapper/WrapperStyle'
import PokeWrapper from '../../components/PokeComp/PokeWrapper'
import axios from 'axios'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const WrapperForm = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WrapperPoke = styled(WrapperContainer)`
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 0;
`

const Pokemons = () => {
  const [pokemon, setPokemon] = useState()
  const [error, setError] = useState()

  const pokeInfoSubmit = async(e)=>{
    e.preventDefault()
    if(e.target.pokeInput.value === ""){
      return alert("Ingresa un valor")
    }
    try{
      //ipAekop
      const pokemonInput = e.target.pokeInput.value.toLowerCase().trim()
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
      setError()
      setPokemon(data)
    }
    catch(err){
      setPokemon()
      setError(err)
      
    }
  } 
  return (
    <>
    <WrapperPoke>
         <WrapperForm>
            <FormPokemon pokeInfoSubmit={pokeInfoSubmit}></FormPokemon>
         </WrapperForm>
         <PokeWrapper>
          {error && <h2>Has Ingresado un pokemon que no existe</h2>}
          {pokemon && <PokemonCard {...pokemon} />}
          </PokeWrapper>
      </WrapperPoke>
      </>
    
  )
}


export default Pokemons