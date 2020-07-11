import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/student'>Студенту</Link></li>
        <li><Link to='staff'>Сотруднику</Link></li>
        <li><Link to='/contacts'>Контакты</Link></li>
        <li><Link to='/chat'>Чат</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;