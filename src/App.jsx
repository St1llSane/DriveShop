import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Intro from './components/Intro'
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <div className="app-first-screen">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
