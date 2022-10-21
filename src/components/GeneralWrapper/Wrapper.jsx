import React from 'react'
import { WrapperContainer } from './WrapperStyle'


function Wrapper({children}) {
  return (
    <WrapperContainer >{children}</WrapperContainer>
  )
}

export default Wrapper