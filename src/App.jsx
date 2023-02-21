import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'
import ProductsPage from './pages/ProductsPage'
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="favorites/*" element={<Favorites />}>
            <Route path="product-page" element={<ProductPage />} />
          </Route>
          <Route path=":category" element={<ProductsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
