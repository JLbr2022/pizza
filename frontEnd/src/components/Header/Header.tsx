import Search from 'components/Main/Search'
import DrawerMenu from './DrawerMenu'
import imageAvatar from '../../public/images/avatar.svg'

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
  }

  return (
    <div
      className="gap-4
        grid auto-cols-fr
        transition-all duration-200
        "
    >
      <header
        className="
        w-full h-30
        bg-contain bg-center bg-repeat-x 
        flex justify-between items-center
          transition-all duration-500
        "
        style={{
          backgroundImage: `url(${buildings.image})`
        }}
      >
        <div // Avatar
          className="bg-avatar
                      flex justify-center
                      bg-center bg-no-repeat bg-contain
                      h-20 w-20 ml-4 p-4
                      sm:h-20 sm:w-20 
                      md:h-32 md:w-28
                      lg:h-40 lg:w-40
                      xl:h-44 xl:w-44 
                    "
        ></div>

        <div
          className="flex justify-between
                    text-yellow-500 font-black text-center
                      text-3xl 
                      sm:text-5xl 
                      md:text-6xl 
                      lg:text-7xl
                    "
        >
          <h1>PizzaTown Delivery</h1>
        </div>
        <div>
          <DrawerMenu />
        </div>
      </header>
      <div className="pr-4 pl-4">
        <Search />
      </div>
    </div>
  )
}
