import React, { useState } from 'react'

function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      {!isOpen ? (
        <div className="text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center
                mr-3 text-sm text-gray-500
                rounded-lg md:hidden hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-gray-200
                dark:text-yellow-500 dark:hover:bg-green-900 dark:focus:ring-gray-600
                transform transition-all hover:scale-125"
          >
            <svg
              className="w-7 h-7 m-1
               transition-all hover:scale-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <div
          id="drawer-bottom-example"
          className="
          fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto 
          bg-white dark:bg-green-900 transform-none
          transition-all duration-500 ease-out"
        >
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path>
            </svg>
            Acceso administrativo
          </h5>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="text-gray-400 bg-transparent 
              hover:bg-gray-200 hover:text-gray-900 
              rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 
              inline-flex items-center 
              dark:hover:bg-red-800 dark:hover:text-yellow-500
              transform transition-all hover:scale-125"
          >
            <svg
              className="w-5 h-5 transition-all hover:scale-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              id="subject"
              className="
              mb-1 bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5
              dark:bg-gray-300 dark:border-gray-600
              dark:placeholder-gray-600 dark:text-gray-800 font-semibold
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@email.com"
              required
            />
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Clave
            </label>
            <input
              type="text"
              id="subject"
              className="
              bg-gray-50 border border-gray-300
              text-gray-900 text-sm rounded-lg
              focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5
              dark:bg-gray-300 dark:border-gray-600
              dark:placeholder-gray-600 dark:text-gray-800 font-semibold
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center
          text-white bg-blue-700 rounded-lg
          hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
          dark:bg-green-800 dark:hover:bg-green-700 
          focus:outline-none dark:focus:ring-yellow-400"
          >
            Entrar{' '}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </main>
  )
}

export default DrawerMenu
