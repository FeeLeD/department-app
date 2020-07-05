import React, { useEffect, useState } from 'react';
import logo from '../images/urfu_logo_full.png';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ loginUser }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userData;

  useEffect(() => {
    document.addEventListener('click', e => {
      const elementId = e.target.id;
      if (elementId === 'login-background') {
        const loginBackground = document.getElementById('login-background');
        loginBackground.style.display = 'none';
      }
    });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    loginUser({ email, password }, () => {
      const loginBackground = document.getElementById('login-background');
      loginBackground.style.display = 'none';
    });
  };

  return (
    <div id='login-background' className='login-background'>
      <div className='login'>
        <div>
          <img src={logo} alt='Urfu' />
          <span>Авторизация</span>
        </div>
        <form id='login-form' onSubmit={e => onSubmit(e)}>
          <input
            name='email'
            value={email}
            onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
            className='input-login'
            type='email'
            placeholder='Ваш e-mail...'
            required
          />
          <input
            name='password'
            value={password}
            onChange={e => setUserData({ ...userData, [e.target.name]: e.target.value })}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired
}

export default connect(null, { loginUser })(Login);