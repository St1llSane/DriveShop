import { AiOutlineYoutube } from 'react-icons/ai'
import {
  SlSocialInstagram,
  SlSocialVkontakte,
  SlSocialFacebook,
} from 'react-icons/sl'
import EmailInput from './UI/EmailInput'
import '../styles/c_styles/footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <form className="footer__wrapper-form" action="#">
          <label htmlFor="email-input">
            Подпишитесь на нашу рассылку и узнавайте о акция быстрее
          </label>
          <EmailInput />
        </form>
        <div className="footer__wrapper-nav">
          <ul>
            <li>
              <h6>Информация</h6>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Магазины</a>
            </li>
          </ul>
          <ul>
            <li>
              <h6>Интернет-магазин</h6>
            </li>
            <li>
              <a href="#">Доставка и самовывоз</a>
            </li>
            <li>
              <a href="#">Оплата</a>
            </li>
            <li>
              <a href="#">Возврат-обмен</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
          </ul>
        </div>
        <ul className="footer__wrapper-socials">
          <li>
            <a href="#">
              <SlSocialInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <SlSocialVkontakte />
            </a>
          </li>
          <li>
            <a href="#">
              <SlSocialFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__bottom">
        <a href="#">Договор оферты</a>
        <a href="#">Политика обработки персональных данных</a>
      </div>
    </footer>
  )
}

export default Footer
