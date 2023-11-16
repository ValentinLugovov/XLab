import { useState } from 'react';
import './style/sideBar.css';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rotate, setRotate] = useState<number>(180);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (rotate === 0) {
      setRotate(180);
    } else {
      setRotate(0);
    }
  };
  return (
    <aside className="sideBar">
      <div className="sidebar-header">
        <h3>Меню</h3>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="main.svg" alt="main" />
            <span>Главная</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/address" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="glass.svg" alt="main" />
            Поиск адресов
          </NavLink>
        </li>
        <li>
          <NavLink to="/tables" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="tables.svg" alt="main" />
            Таблицы
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="calendar.svg" alt="main" />
            Календарь
          </NavLink>
        </li>
        <li>
          <NavLink to="/maps" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="markup.svg" alt="main" style={{marginRight: '25px'}} />
            Карты
          </NavLink>
        </li>
        <li>
          <NavLink to="/widgets" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="widgets.svg" alt="main" />
            Виджеты
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" onClick={toggleDropdown}>
            <img src="setting.svg" alt="main" />
            Настройки
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              transform={`rotate(${rotate})`}>
              <path
                d="M6.06699 0.749999C6.25944 0.416666 6.74056 0.416667 6.93301 0.75L12.5622 10.5C12.7546 10.8333 12.5141 11.25 12.1292 11.25H0.870834C0.485934 11.25 0.245372 10.8333 0.437822 10.5L6.06699 0.749999Z"
                fill="#A8A8A8"
              />
            </svg>
          </NavLink>
        </li>
        {isOpen && (
          <>
            <li>
              <NavLink to="/profileSetting">
                <img src="profileSetting.svg" alt="main" className="dropDownBar" />
                Настройки <br /> профиля
              </NavLink>
            </li>
            <li>
              <NavLink to="/finance">
                <img src="phone.svg" alt="main" className="dropDownBar" />
                Управление <br /> финансами
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/exit" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src="exit.svg" alt="main" />
            Выход
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
