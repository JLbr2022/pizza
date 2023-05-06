import React from 'react'
import Promos from '../Footer/Promos'
import './mainStyles.css'

export interface Weather {
  cardContent?: CardContent[] | null
}
export interface CardContent {
  id: number
  title: string
  ingredients: string
  price: number
}

interface CardProps {
  card: CardContent
}

function Card({ card }: CardProps) {
  const pzImage = {
    image: '/src/public/images/pz_Tomate.jpg'
  }

  return (
    <div>
      <section className="card">
        <div className="sectionCard">
          <img className="w-full" src={pzImage.image} alt="Pizza con tomate" />
          <div className="px-2 py-2 text-center">
            <div className="divTitle">{card.title}</div>
            <div className="pIngredients">{card.ingredients}</div>
            <p className="pPrice">{card.price}</p>
          </div>

          <div className="buttonSubmitGroup">
            <button type="submit" className="buttonSubmitWhatsapp">
              Pedir en Whatsapp
            </button>
            <button type="submit" className="buttonSubmitClose">
              Cerrar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card
