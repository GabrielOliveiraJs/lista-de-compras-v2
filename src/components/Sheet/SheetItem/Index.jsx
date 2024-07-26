import { useEffect, useState } from "react"
import styled from "styled-components"
import SpanButton from "../../SpanButton/Index"
import { FaDeleteLeft } from "react-icons/fa6"
import { useItens } from "../../../hooks/useItens"

const StyledSheetItem = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-line);
    margin-bottom: 5px;
    padding: 10px 5px 0px 5px;
    color: var(--color-text);
`

const StyledCheckbox = styled.input`
    flex: 1;
    cursor: pointer;
    margin-bottom: 15px;
    margin-left: 10px;
    position: relative;
    appearance: none;

    &::before {
        background-color: var(--color-background-checkbox);
        content: '';
        height: 15px;
        left: 0;
        outline: 2px solid var(--color-outline);
        position: absolute;
        top: 0;
        width: 15px;
    }

    &:checked::before {
        background-color: var(--color-background-checkbox);
        content: '';
        height: 15px;
        left: 0;
        outline: 2px solid var(--color-outline-after);
        position: absolute;
        top: 0;
        width: 15px;
    }

    &:checked::after {
        background-image: url(../images/check-mark.png);
        background-size: contain;
        content: '';
        height: 15px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        transform: scale(1);
        transition: all .3s ease;
        width: 15px;
    }

    &:not(:checked)::after {
        background-image: url(../images/check-mark.png);
        background-size: contain;
        content: '';
        height: 15px;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transform: scale(0);
        width: 15px;
    }
`
const StyledText = styled.p`
    flex: 5;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    color: var(--color-text);
`

const StyledQuantity = styled.p`
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    color: var(--color-text);
`

const SheetItem = ({ id, text, quantity, checked }) => {
    const { deleteSelectedItem, changeIsChecked } = useItens()
    const [disabled, setDisabled] = useState(false)

    const checkItem = async (id) => {
        setDisabled(true)
        await changeIsChecked(id)
        setDisabled(false)
    }

    const deleteItem = async (id) => {
        await deleteSelectedItem(id)
    }

    return (
        <StyledSheetItem id={id}>
            <StyledCheckbox
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={() => checkItem(id)}
            />
            <StyledText style={{ textDecoration: `${checked ? 'line-through' : 'none'}` }}>
                {text}
            </StyledText>
            <StyledQuantity style={{ textDecoration: `${checked ? 'line-through' : 'none'}` }}>
                {quantity}
            </StyledQuantity>
            <SpanButton type='remove' onClick={() => deleteItem(id)}>
                <FaDeleteLeft />
            </SpanButton>
        </StyledSheetItem>
    )
}

export default SheetItem