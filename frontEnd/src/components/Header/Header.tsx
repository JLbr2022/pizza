import DrawerMenu from '../DrawerMenu/DrawerMenu'
import './header.css'

export default function Avatar() {
  return (
    <header className="header header-background">
      <div
        className="avatar avatar-image
          sm:h-20 sm:w-20
          md:h-32 md:w-28
          lg:h-40 lg:w-40
          xl:h-44 xl:w-44
          "
      />
      <p
        className="header-text
          text-4xl;
          md:text-6xl;
          lg:text-8xl;
          xl:text-9xl;
          "
      >
        PizzaTown Delivery
      </p>
      <DrawerMenu />
    </header>
  )
}
