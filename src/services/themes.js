import axios from 'axios'

const themesApi = axios.create({
    baseURL: 'http://localhost:8000/themes'
})

async function getThemes() {
    const response = await themesApi.get('/')

    return response.data
}

async function updateTheme(id, data) {
    await themesApi.patch(`/${id}`, data)
}

export {
    getThemes,
    updateTheme
}