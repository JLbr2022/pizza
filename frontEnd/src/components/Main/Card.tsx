import React from 'react'
import Promos from '../Footer/Promos'

function Card() {
  const pzImage = {
    image: '/src/public/images/pz_Tomate.jpg'
  }
  return (
    <div className="max-w-sm rounded  shadow-lg">
      <img className="w-full" src={pzImage.image} alt="Pizza con tomate" />
      <div className="px-2 py-2">
        <div className="font-bold text-yellow-500 text-xl mb-1 flex justify-center">
          Pizza con Tomate
        </div>
        <p className="text-gray-300 text-base flex justify-center">
          Ingredientes: Tomate, mozzarela, Aceitunas
        </p>
        <p className="text-yellow-500 font-semibold text-base flex justify-center">
          Precio: R$40
        </p>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="
          bg-green-900
          rounded-md text-lg 
          font-sans text-green-200 
          flex justify-center
          w-full
          p-4
          "
        >
          Enviar información a Whatsapp
        </button>
      </div>
    </div>
  )
}

export default Card
