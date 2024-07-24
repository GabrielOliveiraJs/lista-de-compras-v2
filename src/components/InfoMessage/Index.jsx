import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.p`
    text-align: center;
    padding: 4px 6px;
    color: var(--color-text);
`

const InfoMessage = ({ text }) => {
  return (
    <StyledMessage>
        {text}
    </StyledMessage>
  )
}

export default InfoMessage