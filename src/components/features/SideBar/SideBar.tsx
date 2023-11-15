import { useState } from 'react';
import './style/sideBar.css';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className="sideBar">
      <div className="sidebar-header">
        <h3>Меню</h3>
      </div>
      <ul>
        <li>
          <div className="linkBox">
            <img src="main.svg" alt="main" />
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              Главная
            </NavLink>
          </div>
        </li>
        <li>
          <img src="glass.svg" alt="main" />
          <NavLink to="/address" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Поиск адресов
          </NavLink>
        </li>
        <li>
          <img src="tables.svg" alt="main" />
          <NavLink to="/tables" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Таблицы
          </NavLink>
        </li>
        <li>
          <img src="calendar.svg" alt="main" />
          <NavLink to="/calendar" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Календарь
          </NavLink>
        </li>
        <li>
          <img src="markup.svg" alt="main" />
          <NavLink to="/maps" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Карты
          </NavLink>
        </li>
        <li>
          <img src="widgets.svg" alt="main" />
          <NavLink to="/widgets" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Виджеты
          </NavLink>
        </li>
        <li>
          <img src="setting.svg" alt="main" />
          <NavLink to="/settings" onClick={toggleDropdown}>
            Настройки
          </NavLink>
          {isOpen && (
            <ul className="dropDownBar">
              <li>
                <img src="profileSetting.svg" alt="main" />
                <Link to={''}>Настройки профиля</Link>
              </li>
              <li>
                <img src="phone.svg" alt="main" />
                <Link to={''}>Управление финансами</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <img src="exit.svg" alt="main" />
          <NavLink to="/exit" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Выход
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
