import "./header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";

export default function Header() {
  return (
    <section className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <input
        type="text"
        className="header__search-bar"
        placeholder="       Search"
      />
      <div className="header__icon"></div>
      <div className="header__upload-box">
        <button className="header__upload-button">UPLOAD</button>
      </div>
    </section>
  );
}
