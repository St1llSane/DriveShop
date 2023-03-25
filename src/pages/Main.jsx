import Intro from '../components/Intro'
import Categories from '../components/Categories'
import SaleBanner from '../components/SaleBanner'
import Popular from '../components/Popular'
import '../styles/c_styles/p_styles/main.scss'

const Main = () => {
  return (
    <main className="main">
      <div className="main__first-screen">
        <Intro />
        <SaleBanner />
      </div>
      <Categories />
      <Popular>Популярные товары</Popular>
    </main>
  )
}

export default Main
