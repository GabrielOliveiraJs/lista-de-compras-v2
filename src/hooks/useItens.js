import { useState } from "react"
import { createItens, deleteItem, getItens } from "../services/itens"

export function useItens() {
  const [itens, setItens] = useState([])

  const fetchItems = async () => {
    const itemsApi = await getItens()
    setItens(itemsApi)
  }

  const createId = async () => {
    const itemsApi = await getItens()
    if (itemsApi.length > 0) {
      const allIds = itemsApi.map(item => item.id)
      const newId = Math.max(...allIds) + 1
      return newId
    } else {
      return 1
    }
  }

  const addNewItem = async (newItem) => {
    try {

      if (newItem.itemName === '' || newItem.quantity <= 0) {
        alert('Preencha os campos corretamente!')
        return

      } else {
        await createItens(newItem)
        setItens([...itens, newItem])
      }

    } catch (error) {
      console.log(error)
    }
  }

  const deleteSelectedItem = async (id) => {
    await deleteItem(id)
  }

  return {
    itens,
    setItens,
    fetchItems,
    createId,
    addNewItem,
    deleteSelectedItem
  }
}

