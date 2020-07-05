import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

const Header = ({ user, logoutUser }) => {

  const openLogin = (e) => {
    e.preventDefault();

    const loginBackground = document.getElementById('login-background');
    loginBackground.style.display = 'initial';
  }

  const logout = e => {
    logoutUser();
  }

  return (
    <div className='chat-header'>

      <div>
        <span>
          Добрый день, {user.isAuthenticated ? `${user.data.firstName} ${user.data.middleName}` : 'гость'}!
            </span>
      </div>
      <div>
        {user.isAuthenticated ?
          <button onClick={e => logout(e)}>Выйти</button>
          :
          <button onClick={e => openLogin(e)}>Войти</button>
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Header);