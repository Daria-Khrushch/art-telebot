import add from "../assets/add-to-cart.png";

export default function Card() {
  return (
    <div className="card">
      <div className="logo">
        <img
          src="https://www.aptos.systems/wp-content/uploads/2022/07/UGLY_-760x422.png"
          alt=""
        />
      </div>
      <hr />
      <div className="title">
        <h3 className="name">Name of chanel</h3>
        <span className="desc">Description of chanel</span>
      </div>
      <hr />
      <div className="meta">
        <div>
          <h3>Подписчики</h3>
          <span>983,321</span>
        </div>
        <hr />
        <div>
          <h3>Просмотры</h3>
          <span>503,321</span>
        </div>
      </div>
      <hr />

      <div className="setting">
        <div>
          <span>Формат</span>
          <select name="" id="">
            <option value="">1/24</option>
          </select>
        </div>
        <div>
          <span>Количесво</span>
          <input type="number" name="" id="" value="1" />
        </div>
        <hr />
        <span className="sum">54,000</span>
      </div>

      <hr />
      <div className="adding">
        <img src={add} alt="" />
      </div>
    </div>
  );
}
