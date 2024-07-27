import { useEffect, useState } from "react"
import { getThemes, updateTheme } from "../services/themes"

export function useThemes() {
    const [themes, setThemes] = useState([])
    const [themeId, setThemeId] = useState(1)
    const [className, setClassName] = useState('theme-main')
    const html = document.querySelector('html')

    const fetchThemes = async () => {
        const themesApi = await getThemes()
        setThemes(themesApi)
    }

    const getInitialTheme = async () => {
        const themesApi = await getThemes()
        const selectedTheme = await themesApi.find(theme => theme.selected === true)
        setThemeId(selectedTheme.id)
        html.classList.toggle(themeId.className)
    }

    const changeSelectedToFalse = async (id, theme) => {
        const thisTheme = { ...theme, selected: false }
        await updateTheme(id, thisTheme)
    }

    const changeSelected = async (id) => {
        const themesApi = await getThemes()
        const selectedTheme = await themesApi.find(theme => theme.id === Number(id))
        const allOtherThemes = await themesApi.filter(theme => theme.id !== Number(id))

        const alteredTheme = { ...selectedTheme, selected: true }

        await allOtherThemes.forEach(theme => {
            changeSelectedToFalse(theme.id, theme)
        })

        await updateTheme(id, alteredTheme)
    }

    const toggleTheme = async () => {
        if (themes.length > 0) {
            const selectedTheme = themes.filter((theme) => {
                return theme.id === Number(themeId)
            })
            setClassName(selectedTheme[0].className)
            await changeSelected(selectedTheme[0].id)
            html.classList.toggle(className)
        }
    }


    return {
        themes,
        themeId,
        setThemeId,
        className,
        setClassName,
        fetchThemes,
        toggleTheme,
        getInitialTheme
    }
}