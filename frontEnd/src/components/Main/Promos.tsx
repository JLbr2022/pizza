import React from 'react'

function Promos() {
  return (
    <div
      className="
          flex flex-row rounded-lg
        bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        dark:bg-orange-800 md:max-w-xl md:flex-row
        
        "
    >
      <img
        className="h-30 w-20 mb-0 rounded-sm object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-md"
        src="/src/public/images/pz_CalabrezaCatupiri.jpg"
        alt="Calabreza con Catupirí"
      />
      <div className="flex flex-col justify-start p-1">
        <p className="text-xs text-neutral-500 dark:text-yellow-300 flex justify-start">
          PROMOCION
        </p>
        <h5 className="mb-1 mt-0 text-md font-semibold text-neutral-800 dark:text-neutral-50">
          Calabreza con Catupirí
        </h5>
        <p className="text-sm text-neutral-600 dark:text-neutral-200">
          Ingrediente: Catupirí, mozzarela, Aceitunas
        </p>
      </div>
    </div>
  )
}

export default Promos
