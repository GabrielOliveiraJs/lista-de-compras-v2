import styled from "styled-components"
import Item from "./Item/Index"
import { useEffect } from "react"
import { useThemes } from "../../hooks/useThemes"

const StyledSelect = styled.select`
    background-color: #f2f2f2;
    border: 2px solid var(--color-outline);
    appearance: none;
    padding: 2px 4px;
    font-size: 20px;
    transition: 0.4s ease;
    outline: none;
    cursor: pointer;
    
    &:focus {
        -webkit-box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
        -moz-box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
        box-shadow: 5px 5px 5px 1px rgba(34, 34, 34, 0.4);
    }
`

const ThemeList = () => {
    const { themes, themeId, className, setThemeId, fetchThemes, toggleTheme, getInitialTheme } = useThemes()

    useEffect(() => {
        fetchThemes()
    }, [themes])

    useEffect(() => {
        toggleTheme()
    }, [themeId, className])

    useEffect(() => {
        getInitialTheme()
    }, [])

    return (
        <StyledSelect value={themeId} onChange={e => setThemeId(e.target.value)}>
            {themes.map((theme) => (
                <Item key={theme.id} theme={theme} />
            ))}
        </StyledSelect>
    )
}

export default ThemeList