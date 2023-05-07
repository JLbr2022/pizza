import DrawerMenu from '../DrawerMenu/DrawerMenu'
import "./header.css"

export default function Avatar() {
  return (
    <header className="header header-background">
      <div className="avatar avatar-image" />
      <h1 className="header-text">PizzaTown Delivery</h1>
      <DrawerMenu />
    </header>
  )
}
