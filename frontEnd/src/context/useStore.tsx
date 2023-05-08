import React, { useEffect, useState } from 'react'
import jsondata from './ApiRest.json'

export type CardContent = {
  id: number
  title: string
  ingredients: string
  price: number
  image: string
  alt: string
}

export const useStore = () => {
  const [items, setItems] = useState<CardContent[]>([])
  const [filteredItems, setFilteredItems] = useState<CardContent[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  console.log(items)
  const getItems = async () => {
    // const response = await fetch('http://localhost:3000/cardContent')
    // const data = await response.json()
  }
  useEffect(() => {
    setTimeout(() => {
      setItems(jsondata.cardContent as CardContent[])
      setFilteredItems(jsondata.cardContent)
    }, 300)
    // getItems()
  }, [])

  useEffect(() => {
    const applyFilter = () => {
      const _array = items

      if (!filteredItems) {
        setFilteredItems(_array)
        return
      }
      const filtered = _array.filter((data) => {
        const a = data.title.toLowerCase().includes(searchTerm.toLowerCase())
        const b = data.ingredients
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        if (isNaN(Number(searchTerm))) {
          return a || b
        }
        const c = data.price <= Number(searchTerm)
        return a || b || c
      })
      setFilteredItems(filtered)
    }

    applyFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  return {
    items,
    filteredItems,
    setFilteredItems,
    searchTerm,
    setSearchTerm
  }
}
