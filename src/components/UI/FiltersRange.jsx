import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetDearestProductQuery } from '../../redux/api/DriveShopApi'
import { useDispatch, useSelector } from 'react-redux'
import {
	filtersRangeSelector,
	filtersRangeValuesSelector,
	setRangeValues,
} from '../../redux/slices/filtersRangeSlice'
import '../../styles/c_styles/ui_styles/filters-range.scss'

const FiltersRange = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { data = [], isLoading } = useGetDearestProductQuery({
		location: location.pathname,
		filter: 'sort=price&_order=desc&_start=0&_end=1',
	})
	const maxValue = data
	const [rangeTrackPercantage, setRangeTrackPercantage] = useState({
		minPercentage: 0,
		maxPercentage: 100,
	})
	const { rangeValues } = useSelector(filtersRangeSelector)
	const { min, max } = useSelector(filtersRangeValuesSelector)

	useEffect(() => {
		dispatch(setRangeValues({ min: 0, max: maxValue }))
	}, [isLoading])

	const gap = (maxValue / 100) * 1

	const setRangeValueHandler = (e) => {
		const { name, value } = e.target

		dispatch(
			setRangeValues({
				...rangeValues,
				[name]: parseInt(value),
			})
		)

		if (name === 'min' && parseInt(value) > max - gap) {
			dispatch(
				setRangeValues({
					...rangeValues,
					min: parseInt(max - gap),
				})
			)
		}

		if (name === 'max' && parseInt(value) < min + gap) {
			dispatch(
				setRangeValues({
					...rangeValues,
					max: parseInt(min + gap),
				})
			)
		}

		setRangeTrackPercantageHandler()
	}

	const setRangeTrackPercantageHandler = () => {
		setRangeTrackPercantage({
			...rangeTrackPercantage,
			minPercentage: (min / maxValue) * 100,
			maxPercentage: (max / maxValue) * 100,
		})
	}

	return (
		<div className='filters-range'>
			<div className='filters-range__top'>
				<span>Цена:</span>
			</div>
			<div className='filters-range__input'>
				<div className='filters-range__input-inputs'>
					<div
						className='filters-range__input-inputs_track'
						style={{
							background: `linear-gradient(to right, 
								#a5acbd ${rangeTrackPercantage.minPercentage}%, 
								#2889b9 ${rangeTrackPercantage.minPercentage}%, 
								#2889b9 ${rangeTrackPercantage.maxPercentage}%, 
								#a5acbd ${rangeTrackPercantage.maxPercentage}%)`,
						}}
					></div>
					<input
						type='range'
						name='min'
						min='0'
						max='1543000'
						value={min}
						onInput={setRangeValueHandler}
					/>
					<input
						type='range'
						name='max'
						min='0'
						max='1543000'
						value={max}
						onInput={setRangeValueHandler}
					/>
				</div>
				<div className='filters-range__input-values'>
					<span className='filters-range__input-values_min'>
						<span>от:</span>
						<span>{min}</span>
					</span>
					<span className='filters-range__input-values_max'>
						<span>до:</span>
						<span>{max}</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default FiltersRange
