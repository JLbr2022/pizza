import React from 'react'
import Promos from './Promos'

function Card() {
  const pzImage = {
    image: '/src/public/images/pz_Tomate.jpg'
  }
  return (
    <div className="max-w-sm rounded  shadow-lg">
      <img className="w-full" src={pzImage.image} alt="Pizza con tomate" />
      <div className="px-6 py-2">
        <div className="font-bold text-yellow-500 text-xl mb-2 flex justify-center">
          Pizza con Tomate
        </div>
        <p className="text-gray-300 text-base">
          Ingredientes: Tomate, mozzarela, Aceitunas
        </p>
        <p className="text-yellow-500 font-semibold text-base flex">
          Precio: R$40
        </p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <button
          type="submit"
          className="
          bg-green-900 
          rounded-md px-3 py-1 text-sm 
          font-sans text-green-200 
          mr-2 mb-2
          flex justify-center
          w-full
          "
        >
          Enviar información a Whatsapp
        </button>
      </div>
    </div>
  )
}

export default Card
