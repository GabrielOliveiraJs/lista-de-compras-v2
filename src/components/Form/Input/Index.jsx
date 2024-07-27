import styled from "styled-components"

const StyledFormInput = styled.input`
    width: ${props => props.$width};
    text-align: ${props => props.$textalign};
    padding: ${props => props.$padding};
    font-size: 1.5rem;
    padding: 2px;
    text-transform: uppercase;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-bottom: 2px solid var(--color-outline);
    outline: none;
    transition: 0.2s;

    &:focus {
        background-color: rgba(255, 255, 255, 1);
        -webkit-box-shadow: 2px 2px 10px 1px var(--color-input-shadow);
        -moz-box-shadow: 2px 2px 10px 1px var(--color-input-shadow);
        box-shadow: 2px 2px 10px 1px var(--color-input-shadow);
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
    }
`

const Input = ({ type, $width, $textalign = 'left', $padding, require = false, inputValue, changedValue }) => {

    const typedValue = (e) => {
        changedValue(e.target.value)
    }

    return (
        <StyledFormInput
            type={type}
            value={inputValue}
            onChange={typedValue}
            required={require}
            $width={$width}
            $textalign={$textalign}
            $padding={$padding}
        />
    )
}

export default Input