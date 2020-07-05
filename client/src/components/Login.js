import React, { useEffect } from 'react';
import logo from '../images/urfu_logo_full.png';

const Login = () => {
  useEffect(() => {
    document.addEventListener('click', e => {
      const elementId = e.target.id;
      if (elementId === 'login-background') {
        const loginBackground = document.getElementById('login-background');
        loginBackground.style.display = 'none';
      }
    });
  }, []);

  return (
    <div id='login-background' className='login-background'>
      <div className='login'>
        <div>
          <img src={logo} />
          <span>Авторизация</span>
        </div>
        <form id='login-form'>
          <input
            name='email'
            className='input-login'
            type='email'
            placeholder='Ваш e-mail...'
            required
          />
          <input
            name='password'
            className='input-login'
            type='password'
            placeholder='Ваш пароль...'
            required
          />
        </form>
        <div>
          <button form='login-form' type='submit'>Войти</button>
        </div>
      </div>
    </div>
  );
}

export default Login;