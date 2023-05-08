import DrawerMenu from '../DrawerMenu/DrawerMenu'
import './header.css'

export default function Avatar() {
  return (
    <header className="header header-background">
      <div
        className="avatar avatar-image
          h-20 w-20 mt-6
          md:h-28 md:w-28 md:mt-5 ml-1
          lg:h-28 lg:w-28 lg:mt-5
          
          "
      />
      <p
        className="header-text
                  text-lg
                  [text-shadow:_0_3px_2px_rgb(0_0_0_/_40%)]
          "
      >
        PizzaTown Delivery
      </p>
      <DrawerMenu />
    </header>
  )
}
