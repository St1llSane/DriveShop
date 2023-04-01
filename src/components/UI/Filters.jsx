import FiltersParameters from './FiltersParameters'
import '../../styles/c_styles/ui_styles/filters.scss'

const Filters = () => {
	return (
		<div className='filters'>
			<div className='filters__top'>
				<button className='active'>Параметры</button>
				<button>По марке</button>
			</div>
			<FiltersParameters />
			<div className='filters__btns'>
				<button>Применить</button>
			</div>
		</div>
	)
}

export default Filters
