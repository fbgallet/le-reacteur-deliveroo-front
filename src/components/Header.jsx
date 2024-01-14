import logo from "../assets/img/logo-teal.svg";

const Header = () => {
  return (
    <div className="content-wrapper">
      <header>
        <img src={logo} alt="logo Deliveroo" />
        <div className="content-wrapper"></div>
      </header>
    </div>
  );
};

export default Header;
