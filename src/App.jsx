import './normalize.css'
import { useEffect } from 'react'
import styled from 'styled-components'
import Form from './components/Form/Index'
import Sheet from './components/Sheet/Index'
import ThemeList from './components/ThemeList/Index'
import { useItens } from './hooks/useItens'

const StyledTitle = styled.h1`
  color: var(--color-title);
  text-transform: capitalize;
`

const StyledWrapContainer = styled.div`
    align-items: center;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: 0.5s;
  `

const StyledSelectSection = styled.section`
  min-width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

function App() {
  const { itens, setItens, fetchItems } = useItens()

  useEffect(() => {
    fetchItems()
  }, [itens])

  // const deletedSelectedItem = (id) => {
  //   setItens(itens.filter(item => item.id !== id))
  // }

  return (
    <StyledWrapContainer>
      <StyledSelectSection>
        <ThemeList />
      </StyledSelectSection>
      <StyledTitle>Lista de compras</StyledTitle>
      <Form />
      <Sheet itens={itens} />
    </StyledWrapContainer>
  )
}

export default App
