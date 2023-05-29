import notification from "../assets/notification.png";
import user from "../assets/user.png";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <h1>TeleBot.tg</h1>
      </div>
      <div className="other">
        <div className="serv">Сервисы</div>
        <div className="nav_btn">
          <button>Пополнить</button>
        </div>
        <img src={notification} alt="" />
        <img src={user} alt="" />
      </div>
    </nav>
  );
}
