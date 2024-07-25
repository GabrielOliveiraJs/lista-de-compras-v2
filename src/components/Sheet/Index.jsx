import styled from 'styled-components'
import SheetItem from './SheetItem/Index'
import InfoMessage from '../InfoMessage/Index'

const StyledSheet = styled.ul`
        width: 100%;
        height: 600px;
        max-width: 600px;
        background-color: var(--color-sheet);
        margin: 10px 0;
        overflow-y: scroll;
        padding: 10px;
        border-radius: 20px;

        @media screen and (max-width:650px) {
            margin: 0 10px;
        }

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: var(--color-bg-scrollbar);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--color-scrollbar);
            border-radius: 20px;
        }
    `

const Sheet = ({ itens }) => {
    return (
        <StyledSheet>
            {
                itens.length > 0 ?
                    itens.map(item =>
                        <SheetItem
                            key={item.id}
                            id={item.id}
                            text={item.itemName}
                            quantity={item.quantity}
                        />
                    )
                    :
                    <InfoMessage text="Uau, que vazio! Adicione um item!" />
            }
        </StyledSheet>
    )
}

export default Sheet