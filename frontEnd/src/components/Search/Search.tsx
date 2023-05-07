import React, { useContext, useEffect, useState } from 'react'
import './search.css'
import { AppContext } from 'context/appContext'

function Search() {
  const { searchTerm, setSearchTerm } = useContext(AppContext)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="search-form">
      <form>
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
            className="inputSearch"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  )
}

export default Search
