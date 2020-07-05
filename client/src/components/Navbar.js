import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
      <ul>
        <li><Link to='/'>Главная</Link></li>
        <li><Link>Студенту</Link></li>
        <li><Link>Сотруднику</Link></li>
        <li><Link>Контакты</Link></li>
        <li><Link to='/chat'>Чат</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;