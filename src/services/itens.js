import axios from 'axios'

const itensApi = axios.create({
    baseURL: 'http://localhost:8000/itens'
})

async function getItens() {
    const response = await itensApi.get('/')
    return response.data
}

async function createItens(data) {
    await itensApi.post('/', data)
}

async function updateItens(id, data) {
    await itensApi.patch(`/${id}`, data)
}

async function deleteItem(id) {
    await itensApi.delete(`/${id}`)
}

export {
    getItens,
    createItens,
    updateItens,
    deleteItem
}