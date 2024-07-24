import styled from "styled-components"

const StyledOption = styled.option`
   background-color: #f2f2f2;
`

const Item = ({ theme }) => {
    return (
        <StyledOption value={theme.id}>
            {theme.name}
        </StyledOption>
    )
}

export default Item