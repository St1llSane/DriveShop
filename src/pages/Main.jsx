import Intro from '../components/Intro'
import Search from '../components/Search'
import '../styles/c_styles/main.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main__first-screen">
        <Search />
        <Intro />
      </div>
    </main>
  )
}

export default Main
