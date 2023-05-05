import React from 'react'
import Promos from '../Footer/Promos'
import './mainStyles.css'

function Card() {
  const pzImage = {
    image: '/src/public/images/pz_Tomate.jpg'
  }
  return (
    <section className="card">
      <div className="sectionCard">
        <img className="w-full" src={pzImage.image} alt="Pizza con tomate" />
        <div className="px-2 py-2 text-center">
          <div className="divTitle">Pizza con Tomate</div>
          <div className="pIngredients">Tomate, mozzarela, Aceitunas</div>
          <p className="pPrice">Precio: R$40</p>
        </div>

        <div className="mr-2 ml-2 mb-2">
          <button type="submit" className="buttonSubmit">
            Pedir en Whatsapp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card
