import { useState } from "react"
import { createItens, deleteItem, getItens } from "../services/itens"

export function useItens() {
  const [itens, setItens] = useState([])

  const fetchItems = async () => {
    const itemsApi = await getItens()
    setItens(itemsApi)
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

  const deleteSelectedItem = (id) => {
    if (id && Number(id)) {
      deleteItem(id)
    } else {
      console.log('Id inválido: ', id)
    }
  }

  return {
    itens,
    setItens,
    fetchItems,
    addNewItem,
    deleteSelectedItem
  }
}

