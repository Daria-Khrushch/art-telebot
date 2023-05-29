import searchIcon from "../assets/search_icon.png";

export default function Filters() {
  return (
    <div className="filters">
      <h2>Фильтры</h2>
      <div className="by_title">
        <input className="filtres-input" placeholder="Поиск..." />
        <button className="filtres-btn">
          <img className="filtres-img" src={searchIcon} alt="" />
        </button>
      </div>
      <div className="theme">
        <p>Тематика:</p>
        <select className="filtres-select">
          <option className="filters-option" value="0">
            Все тематики
          </option>
          <option className="filters-option" value="1">
            Audi
          </option>
          <option className="filters-option" value="2">
            BMW
          </option>
          <option className="filters-option" value="3">
            Citroen
          </option>
        </select>
      </div>
      <div className="lang">
        <p>Язык:</p>
        <select className="filtres-select">
          <option className="filters-option" value="0">
            Все языки
          </option>
          <option className="filters-option" value="1">
            Audi
          </option>
          <option className="filters-option" value="2">
            BMW
          </option>
          <option className="filters-option" value="3">
            Citroen
          </option>
        </select>
      </div>
    </div>
  );
}
