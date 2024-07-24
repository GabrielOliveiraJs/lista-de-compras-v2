import axios from 'axios'

const themesApi = axios.create({
    baseURL: 'http://localhost:8000/themes'
})

async function getThemes() {
    const response = await themesApi.get('/')

    return response.data
}

export {
    getThemes
}