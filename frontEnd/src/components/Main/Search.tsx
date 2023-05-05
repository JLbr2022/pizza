import React from 'react'

function Search() {
  return (
    <form className="mr-2 ml-2 mt-5 mb-2">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="pizza, bebida, ingrediente, precio..."
          required
          className="inputSearch "
        />
        <button
          type="submit"
          className="button p-4 transform transition-color duration-300"
        >
          <p>Buscar</p>
        </button>
      </div>
    </form>
  )
}

export default Search
