import Intro from '../components/Intro'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Popular from '../components/Popular'
import '../styles/c_styles/main.scss'
import SaleBanner from '../components/SaleBanner'

const Main = () => {
  return (
    <main className="main">
      <div className="main__first-screen">
        <Search />
        <Intro />
      </div>
      <Categories />
      <Popular />
			<SaleBanner />
    </main>
  )
}

export default Main
