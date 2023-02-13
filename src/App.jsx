import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Footer from './components/Footer'
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
