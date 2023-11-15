import React from 'react';
import './style/sideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sideBar">
      <ul>
       <li><a href="#"><Link to="/">Главная</Link></a></li>
       <li><a href="#"><Link to="/">Поиск адресов</Link></a></li>
       <li><a href="#"><Link to="/">Таблицы</Link></a></li>
       <li><a href="#"><Link to="/">Календарь</Link></a></li>
       <li><a href="#"><Link to="/">Карты</Link></a></li>
       <li><a href="#"><Link to="/">Виджеты</Link></a></li>
       <li><a href="#"><Link to="/">Настройки</Link></a></li>
       <li><a href="#"><Link to="/">Выход</Link></a></li>
     </ul>
    </div>
  );
};

export default SideBar;
