import logo from "../images/logo.svg";
function Header(props) {
  return (
      <header className="header">
        <img className="header__logo" src={logo} alt="лого" />
        <div className="header__rendered-element">{props.children}</div>
      </header>
  );
}
export default Header;
