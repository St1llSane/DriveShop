import { useDispatch, useSelector } from 'react-redux'
import { burgerSelector, setActive } from '../../redux/slices/burgerSlice'
import '../../styles/c_styles/ui_styles/burger.scss'

const Burger = () => {
	const dispatch = useDispatch()
	const { active } = useSelector(burgerSelector)

	const setActiveHandler = () => {
		dispatch(setActive(!active))
	}

	return (
		<button
			className={`burger ${active && 'active'}`}
			onClick={setActiveHandler}
		>
			<span></span>
		</button>
	)
}

export default Burger
