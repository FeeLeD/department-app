import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getChats } from '../actions/chat';

// Images
import search from '../images/search.png';
import menu from '../images/menu.png';
import chatImg from '../images/chat.png';

// Components
import Header from './chat/Header';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';

const Chat = ({ user, chat, getChats }) => {

  useEffect(() => {
    if (user.isLoaded) {
      getChats();
    }
  }, [user.isLoaded]);

  const openSearch = e => {
    e.preventDefault();
    const chatDialog = document.getElementById('chat-dialog-back');
    chatDialog.style.display = 'initial';
  }

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
                    <button onClick={e => openSearch(e)}>
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
                    {
                      (chat && chat.activeChat !== -1) ?
                        <Fragment>
                          <div className='chat-area-block header'>Чат</div>
                          <Messages />
                          <Input />
                        </Fragment>
                        :
                        <div className='no-chats'>Выберите чат...</div>
                    }
                  </Fragment>
                  :
                  <div className='chat-area-image-container'>
                    <img src={chatImg} alt='Chat' />
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
  getChats: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth,
  chat: state.chat
});

export default connect(mapStateToProps, { getChats })(Chat);
