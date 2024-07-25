import { MdAddCircleOutline, MdOutlineRemoveCircleOutline, MdOutlinePlaylistAdd } from "react-icons/md"
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from "react"
import styled from "styled-components"
import Input from "./Input/Index"
import SpanButton from "../SpanButton/Index"
import { useItens } from "../../hooks/useItens"

const StyledItemForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 10px;
    gap: 5px;

    @media screen and (max-width:650px) {
        flex-direction: column;
    }
`

const StyledQtyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledFormButton = styled.button`
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: var(--color-icon-btn);
    margin: 0 10px;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
        color: var(--color-icon-btn-hover);
    }
`

const Form = () => {
    const { addNewItem } = useItens()
    const [itemName, setItemName] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleClickSpanButton = (type) => {
        if (type === 'add') {
            setQuantity(Number(quantity) + 1)
        } else {
            if (quantity > 1) {
                setQuantity(Number(quantity) - 1)
            }
        }
    }

    const saveItem = async (e) => {
        e.preventDefault()
        const createdItem = {
            id: uuidv4(),
            itemName,
            quantity
        }

        await addNewItem(createdItem)
        setItemName('')
        setQuantity(1)
    }

    return (
        <StyledItemForm onSubmit={saveItem}>
            <Input
                $width='300px'
                type='text'
                $padding='2px 5px'
                required={true}
                inputValue={itemName}
                changedValue={value => setItemName(value)}
            />

            <StyledQtyContainer>

                <SpanButton type='setQuantity' onClick={() => handleClickSpanButton('add')}>
                    <MdAddCircleOutline />
                </SpanButton>

                <Input
                    $width='60px'
                    type='number'
                    $padding='2px 0'
                    $textalign='center'
                    inputValue={quantity}
                    changedValue={value => setQuantity(value)}
                />

                <SpanButton type='setQuantity' onClick={() => handleClickSpanButton('remove')}>
                    <MdOutlineRemoveCircleOutline />
                </SpanButton>

            </StyledQtyContainer>

            <StyledFormButton>
                <MdOutlinePlaylistAdd />
            </StyledFormButton>
        </StyledItemForm>
    )
}

export default Form

