import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <div className="app-first-screen">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
