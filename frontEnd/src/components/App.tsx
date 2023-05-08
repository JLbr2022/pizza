// import './app.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from './Search/Search'
import { AppContext } from '../context/appContext'
import { useStore } from '../context/useStore'
import './aapp.css'

export default function App() {
  const store = useStore()
  return (
    <AppContext.Provider value={store}>
      <div className="container border-4 border-green-500 bg-[#80110A] mx-auto w-full">
        <div className="header">
          <Header />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="main">
          <Main />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  )
}
