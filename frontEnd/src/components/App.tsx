import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import '../components/app.css'

export default function App() {
  return (
    <div className="container">
      <div className="">
        <Header />
      </div>
      <div className="">
        <Main />
        <Footer />
      </div>
    </div>
  )
}
