import Filters from "./Filters";
import Card from "./Card";

export default function Main() {
  return (
    <div className="main">
      <Filters />
      <div className="content">
        <div className="info">
          <h2>Каналы</h2>
          <div className="filtrs">
            <span className="filtrs-option">Рейтинг</span>
            <span className="filtrs-option">Просмотры</span>
            <span className="filtrs-option">Подписчики</span>
            <span className="filtrs-option">Стоимость</span>
          </div>
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
