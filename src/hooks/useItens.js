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
    setTimeout(() => setMessage(''), 2500)
  }

  const addNewItem = async (newItem) => {
    try {
      const itemsApi = await getItens()
      const itensQty = itemsApi.length
      const itemAlreadyExists = itemsApi.find(item => item.itemName.trim().toLowerCase() === newItem.itemName.trim().toLowerCase())

      if (newItem.itemName === '' || newItem.quantity <= 0) {
        sendMessage('Preencha os campos corretamente!', 'error')
        return
      }

      if (itensQty >= 100) {
        sendMessage('Voce ultrapassou o limite de itens', 'error')
        return
      }

      if (newItem.itemName.length > 40) {
        sendMessage('Escolha um nome menor', 'error')
        return
      }

      if (newItem.quantity > 999) {
        sendMessage('Escolha uma quantidade menor', 'error')
        return
      }

      if (itemAlreadyExists) {
        sendMessage('Item ja existe!', 'error')
        return
      }

      await createItens(newItem)
      setItens([...itens, newItem])
      setItemName('')
      setQuantity(1)

    } catch (error) {
      console.log(error)
      sendMessage('Houve um erro ao adicionar o item', 'error')
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

