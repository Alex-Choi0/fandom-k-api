import "./header_nav.css";
import Logo from "../../assets/image/logo.svg";
import UserIcon from "../../assets/image/usericon.svg";
import { useNavigate } from "react-router-dom";

function HeaderNav() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/list"); //목록페이지로 이동
  };

  const handleUserIconClick = () => {
    navigate("/mypage"); // 마이페이지 이동
  };

  return (
    <header className="HeaderNav">
      <div className="HeaderNav-Side" />
      <div className="HeaderNav-Center" onClick={handleLogoClick}>
        <img src={Logo} alt="Fandom-k 로고" />
      </div>
      <div className="HeaderNav-Right" onClick={handleUserIconClick}>
        <img src={UserIcon} alt="유저 아이콘 로고" />
      </div>
    </header>
  );
}

export default HeaderNav;
