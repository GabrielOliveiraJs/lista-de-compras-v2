import { useState } from "react"
import styled from "styled-components"
import SpanButton from "../../SpanButton/Index"
import { FaDeleteLeft } from "react-icons/fa6"

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

const SheetItem = ({ id, text, quantity, deleteItem }) => {
    const [isChecked, setIsChecked] = useState(false)
    
    const checkItem = () => {
        setIsChecked(isChecked === false ? true : false)
    }

    const getItem = (id) => {
        deleteItem(id)
    }

    return (
        <StyledSheetItem id={id}>
            <StyledCheckbox type="checkbox" onClick={checkItem} />
            <StyledText style={{ textDecoration: `${isChecked ? 'line-through' : 'none'}` }}>
                {text}
            </StyledText>
            <StyledQuantity style={{ textDecoration: `${isChecked ? 'line-through' : 'none'}` }}>
                {quantity}
            </StyledQuantity>
            <SpanButton type='remove' onClick={() => getItem(id)}>
                <FaDeleteLeft />
            </SpanButton>
        </StyledSheetItem>
    )
}

export default SheetItem