import {
  MoreVert,
  Notifications,
  PersonOutline,
  Search,
} from "@mui/icons-material";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="./twitch_ico.png" alt="" />
        <h3>Browse</h3>
        <MoreVert />
      </div>
      <div className="header__middle">
        <input type="text" placeholder="Search" />
        <Search />
      </div>
      <div className="header__right">
        <Notifications />
        <div className="header__right_btn1">Log In</div>
        <div className="header__right_btn2">Sign Up</div>
        <PersonOutline />
      </div>
    </div>
  );
};

export default Header;
