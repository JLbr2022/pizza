import React from 'react'
import { CardContent } from './useStore'

export interface AppContextProps {
  items: CardContent[]
  filteredItems: CardContent[]
  setFilteredItems: (filteredItems: CardContent[]) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

export const AppContext = React.createContext<AppContextProps | null>(null)
