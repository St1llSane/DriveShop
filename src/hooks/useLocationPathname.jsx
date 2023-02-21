import { useLocation } from 'react-router-dom'

const useLocationPathname = () => {
  const location = useLocation()

  switch (location.pathname) {
    case '/':
      return 'Главная'
    case '/favorites':
      return 'Закладки'
    case '/cart':
      return 'Корзина'
  }
}

export default useLocationPathname
