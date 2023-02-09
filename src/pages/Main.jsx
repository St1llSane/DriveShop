import Intro from '../components/Intro'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import '../styles/c_styles/main.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main__first-screen">
        <Search />
        <Intro />
      </div>
      <Categories />
      <Popular />
    </main>
  )
}

export default Main
