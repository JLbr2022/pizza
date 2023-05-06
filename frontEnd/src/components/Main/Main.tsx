import React, { useEffect, useState } from 'react'
import Card, { CardContent } from './Card'

const API_URL = 'http://localhost:3000/cardContent'

function Main() {
  const [cardInfo, setCardInfo] = useState<CardContent[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URL)
      const data = await response.json()
      setCardInfo(data)
    }
    fetchData()
  }, [])

  return (
    <main>
      <div
        className="grid 
                    xs:grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5 
                    gap-4 p-4
                    transition-all duration-200
                  "
      >
        {cardInfo.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </main>
  )
}

export default Main
