import { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import './main.css'
import { AppContext, AppContextProps } from '../../context/appContext'
import { CardContent } from '../../context/useStore'

function Main() {
  const { filteredItems } = useContext(AppContext) as AppContextProps

  return (
    <main className="main-margin scrollbar-hide">
      <div
        className="cards-layout
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-4"
      >
        {filteredItems.map((card: CardContent) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  )
}

export default Main
