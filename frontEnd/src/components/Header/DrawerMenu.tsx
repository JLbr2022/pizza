import React, { useState } from 'react'
import './headerStyles.css'

function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      {!isOpen ? (
        <div className="text-center">
          <button onClick={() => setIsOpen(!isOpen)} className="buttonMenu">
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
        <div id="drawer-bottom-example" className="buttonAdminTitle">
          <h5 className="h5Drawer">
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
            className="buttonXDrawer"
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
          <div className="mb-3 mr-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              className="inputEmail"
              type="text"
              id="subject"
              placeholder="example@email.com"
              required
            />
            <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Clave
            </label>
            <input
              className="inputPassword"
              type="text"
              id="subject"
              placeholder="********"
              required
            />
          </div>
          <button
            className="buttonLogin"
            onClick={() => setIsOpen(false)}
            type="button"
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
