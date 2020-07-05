import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Images
import search from '../images/search.png';
import menu from '../images/menu.png';
import chat from '../images/chat.png';

// Components
import Header from './chat/Header';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';

const Chat = ({ user }) => {
  return (
    <div className='chat-container'>
      {
        (user.loading && localStorage.token) ?
          <div className='chat-loading'>
            ЗАГРУЗКА...
          </div>
          :
          <Fragment>
            <Header />
            <div className='chat-main'>
              <div className='left-panel'>
                {user.isAuthenticated &&
                  <Fragment>
                    <button>
                      <img src={search} alt='S' />
                    </button>
                    <button>
                      <img src={menu} alt='M' />
                    </button>
                  </Fragment>
                }
              </div>
              <Dialogs />
              <div className='chat-area'>
                {user.isAuthenticated ?
                  <Fragment>
                    <div className='chat-area-block header'>
                      User
              </div>
                    <Messages />
                    <Input />
                  </Fragment>
                  :
                  <div className='chat-area-image-container'>
                    <img src={chat} alt='Chat' />
                  </div>
                }
              </div>
            </div>
          </Fragment>
      }

    </div>
  )
};

Chat.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Chat);
