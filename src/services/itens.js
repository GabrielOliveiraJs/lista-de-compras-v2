import axios from 'axios'

const itensApi = axios.create({
    baseURL: 'http://localhost:8000/itens'
})

async function getItens() {
    const response = await itensApi.get('/')
    return response.data
}

async function createItens(data) {
    const response = await itensApi.post('/', data)
    return response.data
}

async function deleteItem(id) {
    const response = await itensApi.delete(`/${id}`)
    return response.data
}

export {
    getItens,
    createItens,
    deleteItem
}