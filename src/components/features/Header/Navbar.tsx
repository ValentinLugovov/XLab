import React from 'react';
import './style/navbarStyle.css';
// import SideBar from '../SideBar/SideBar';

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
      {/* <div><SideBar /></div> */}
    </nav>
  );
};

export default Navbar;
