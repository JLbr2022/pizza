import { useState } from 'react'
import "./drawerMenu.css"
import Login from 'components/Login/Login'

function DrawerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {isOpen && <Login  setIsOpen={setIsOpen}/> }
        <div className="text-center">
          <button onClick={() => setIsOpen(!isOpen)} className="buttonMenu">
            <svg
              className="
              m-4
              w-12 h-12
              
              sm:w-12 sm:h-12
              xl:w-16 xl:h-16

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
    </>
  )
}

export default DrawerMenu
