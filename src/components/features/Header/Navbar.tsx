import './style/navbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="leftContent">
        <div>
          <img src="logo.svg" alt="logo" />
        </div>
        <div>
          <span className="textLogo">Wrench CRM</span>
        </div>
      </div>

      <div className="rightContent">
        <div>
          <img src="person.svg" alt="logo" />
        </div>
        <div>
          <span className="textLogo">Имя Фамилия</span>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
