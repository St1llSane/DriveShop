import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { currentProductSelector } from './redux/slices/currentProductSlice'
import Header from './components/Header'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import CurrentProduct from './pages/CurrentProduct'
import ProductsPage from './pages/ProductsPage'
import Footer from './components/Footer'
import './styles/app.scss'

function App() {
  const { currentProduct } = useSelector(currentProductSelector)

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="favorites/*" element={<Favorites />}>
            <Route path={currentProduct.engTitle} element={<CurrentProduct />} />
          </Route>
          <Route path="cart/*" element={<Cart />}>
            <Route path={currentProduct.engTitle} element={<CurrentProduct />} />
          </Route>
          <Route path=":category/*" element={<ProductsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
