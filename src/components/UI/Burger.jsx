import { useState } from 'react'
import '../../styles/c_styles/ui_styles/burger.scss'

const Burger = () => {
	const [active, setActive] = useState(false)

	const setActiveHandler = () => {
		setActive((prev) => !prev)
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
