import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Search from './Search/Search'
import './app.css'
import { AppContext } from '../context/appContext'
import { useStore } from '../context/useStore'

export default function App() {
  const store = useStore()
  return (
    <AppContext.Provider value={store}>
      <Header />
      <Search />
      <Main />
      <Footer />
    </AppContext.Provider>
  )
}
