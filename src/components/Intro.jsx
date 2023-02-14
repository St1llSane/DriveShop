import PicturesSlider from './PicturesSlider'
import IntroStock from './IntroStock'
import '../styles/c_styles/intro.scss'

const Intro = () => {
  return (
    <section className="intro">
      <PicturesSlider />
      <IntroStock />
    </section>
  )
}

export default Intro
