import React from 'react'

function Search() {
  return (
    <form className="mb-2 mt-2">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Buscar
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-500 dark:text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="
            block w-full p-4 pl-10 text-sm
            text-yellow-900 border
            border-yellow-300 rounded-lg bg-yellow-500
            focus:ring-yellow-500 focus:border-yellow-500
            dark:bg-[#80110a] dark:border-yellow-400
            dark:placeholder-yellow-700 dark:text-yellow-100
            dark:focus:ring-green-500 dark:focus:border-green-500"
          placeholder="Pizza, bebida, ingrediente..."
          required
        />
        <button
          type="submit"
          className="
            text-yellow-900
            absolute right-2.5 bottom-2.5
            bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-4 py-2
            dark:bg-yellow-400 dark:hover:bg-green-700 dark:focus:ring-green-500"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}

export default Search
