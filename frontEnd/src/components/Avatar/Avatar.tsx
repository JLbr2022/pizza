export default function Avatar() {
  const buildings = {
    name: 'BuildingsBackground',
    image: '/src/public/images/BuildingsBackground.svg',
    height: '8vh',
    width: '100%'
  }

  const avatar = {
    name: 'Pizzatown Delivery',
    image: '/src/public/images/avatar.svg',
    height: '4rem',
    width: '3rem'
  }

  return (
    <div
      className="
        bg-contain bg-center bg-repeat-x 
        flex justify-between items-center
      "
      style={{
        backgroundImage: `url(${buildings.image})`,
        height: buildings.height,
        width: buildings.width
      }}
    >
      <div
        className="
        flex justify-center
        bg-center bg-no-repeat bg-contain
        ml-2 mt-4
        "
        style={{
          backgroundImage: `url(${avatar.image})`,
          height: avatar.height,
          width: avatar.width
        }}
      />
      <div className="flex justify-between">
        <h1 className="text-yellow-500 font-black text-2xl">
          PizzaTown Delivery
        </h1>
      </div>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center 
          p-2 ml-3 text-sm text-gray-500 
          rounded-lg md:hidden hover:bg-gray-100 
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-yellow-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}
