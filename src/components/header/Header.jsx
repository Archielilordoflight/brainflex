import "./header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="header__logo-box">
        <img
          src={logo}
          alt="logo"
          className="header__logo"
          onClick={() => navigate("/")}
        />
      </div>
      <input
        type="text"
        className="header__search-bar"
        placeholder="       Search"
      />
      <div className="header__icon"></div>
      <div className="header__upload-box">
        <button
          className="header__upload-button"
          onClick={() => navigate("upload")}
        >
          UPLOAD
        </button>
      </div>
    </section>
  );
}
