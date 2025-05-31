import "./HeaderNav.css";
import Logo from "../../assets/image/logo.svg";
import UserIcon from "../../assets/image/usericon.svg";

function HeaderNav() {
  return (
    <header className="HeaderNav">
      <div className="HeaderNav-Side" />
      <div className="HeaderNav-Center">
        <img src={Logo} alt="Fandom-k 로고" />
      </div>
      <div className="HeaderNav-Right">
        <img src={UserIcon} alt="유저 아이콘 로고" />
      </div>
    </header>
  );
}

export default HeaderNav;
