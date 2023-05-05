import DrawerMenu from './DrawerMenu'

export default function Avatar() {
  const buildings = {
    name: 'BuildingsBackground',
    image: '/src/public/images/BuildingsBackground.svg',
    height: '8vh',
    width: '100%'
  }

  const avatar = {
    name: 'Pizzatown Delivery',
    image: '/src/public/images/avatar.svg'
    // height: '4rem',
    // width: '3rem'
  }

  return (
    <header
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
        
        h-96 w-14 
        mt-0 ml-4

        sm:h-96 sm:w-14 
        sm:mt-0 sm:ml-5 
        
        md:h-96 md:w-20 
        md:mt-6 md:ml-5 
        
        lg:h-96 lg:w-20 
        lg:mt-6 lg:ml-5 
        
        xl:h-96 xl:w-20 
        xl:mt-6 xl:ml-5
        "
        style={{
          backgroundImage: `url(${avatar.image})`
          // height: avatar.height,
          // width: avatar.width
        }}
      />
      <div className="flex justify-between">
        <h1
          className="text-yellow-500 font-black 
              flex text-2xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          PizzaTown Delivery
        </h1>
      </div>

      <DrawerMenu />
    </header>
  )
}
