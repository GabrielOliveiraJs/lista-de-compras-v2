import axios from 'axios'

const itemsApi = axios.create({
    baseURL: 'http://localhost:8000/items'
})

async function getItems() {
    const response = await itemsApi.get('/')

    return response.data
}

export {
    getItems
}