import '../../styles/c_styles/ui_styles/email-input.scss'

const EmailInput = () => {
  return (
    <div className="email-input">
      <input type="email" placeholder="Введите ваш e-mail" id="email-input" />
      <button>Отправить</button>
    </div>
  )
}

export default EmailInput
