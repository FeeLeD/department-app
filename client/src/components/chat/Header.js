import React from 'react';

const Header = () => {

  const openLogin = (e) => {
    e.preventDefault();

    const loginBackground = document.getElementById('login-background');
    loginBackground.style.display = 'initial';
  }

  return (
    <div className='chat-header'>
      <div>
        Добрый день, гость!
        </div>
      <div>
        <button onClick={e => openLogin(e)}>Войти</button>
      </div>
    </div>
  );
}

export default Header;