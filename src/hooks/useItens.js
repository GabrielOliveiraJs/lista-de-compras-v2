import { useState } from "react"
import { getItens, createItens, updateItens, deleteItem } from "../services/itens"

export function useItens() {
  const [itens, setItens] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [message, setMessage] = useState('')
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState(1)

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

  const sendMessage = (message) => {
    setMessage(message)
    setTimeout(() => setMessage(''), 1000)
  }

  const addNewItem = async (newItem) => {
    try {
      const itemsApi = await getItens()
      const itemAlreadyExists = itemsApi.find(item => item.itemName.trim().toLowerCase() === newItem.itemName.trim().toLowerCase())

      if (newItem.itemName === '' || newItem.quantity <= 0) {
        sendMessage('Preencha os campos corretamente!')
        return

      } else if (itemAlreadyExists) {
        sendMessage('Item ja existe!')
        return

      } else {
        await createItens(newItem)
        setItens([...itens, newItem])
        setItemName('')
        setQuantity(1)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const changeIsChecked = async (id) => {
    const itemsApi = await getItens()
    const item = await itemsApi.find(item => item.id === Number(id))
    const alteredItem = { ...item, checked: isChecked === false ? true : false }

    setIsChecked(alteredItem.checked)
    await updateItens(id, alteredItem)
  }

  const deleteSelectedItem = async (id) => {
    await deleteItem(id)
  }

  return {
    itens,
    isChecked,
    itemName,
    quantity,
    message,
    setItemName,
    setQuantity,
    setIsChecked,
    setItens,
    fetchItems,
    createId,
    addNewItem,
    changeIsChecked,
    deleteSelectedItem,
  }
}

