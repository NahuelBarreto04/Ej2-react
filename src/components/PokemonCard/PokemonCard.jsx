import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
        width: 30rem;
        min-height: 30rem;
        margin-top: 2rem ;
        background-color: #292727;
        border-radius: 2rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & img{
            width: 25rem;
        }
        & h2{
            font-size: 3rem;
        }
`

const PokemonCard = (data) => {
    const {name,sprites} = data
  return (
    <CardWrapper>
        <img src={sprites.front_default} alt="" srcset="" />
        <h2>{name}</h2>
    </CardWrapper>
  )
}

export default PokemonCard