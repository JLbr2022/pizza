import Avatar from './Avatar/Avatar'
import Main from './Main/Main'
import Promos from './Main/Promos'
export default function App() {
  return (
    <div
      className="
        bg-[#80110a]
        border-4 
        w-screen h-screen 
        "
    >
      <Avatar />
      <Main />
      <Promos />
    </div>
  )
}
