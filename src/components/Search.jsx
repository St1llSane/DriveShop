import '../styles/c_styles/search.scss'

const Search = () => {
  return (
    <div className="search">
      <ul className="search__tabs">
        <li>
          <button className="active">Поиск по названию</button>
        </li>
        <li>
          <button>Поиск по марке</button>
        </li>
      </ul>
      <form className="search__form">
        <input
          className="search__form-input"
          type="text"
          placeholder="Введите название"
        />
				<button className='search__form-btn'>Поиск</button>
      </form>
    </div>
  )
}

export default Search
