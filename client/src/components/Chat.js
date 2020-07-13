import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getChats, getOnlineMessages } from '../actions/chat';

// Images
import search from '../images/search.png';
import menu from '../images/menu.png';
import chatImg from '../images/chat.png';

// Components
import Header from './chat/Header';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';

const Chat = ({ user, socket, chat, getChats, getOnlineMessages }) => {
  const [onlineMessages, setOnlineMessages] = useState([]);

  useEffect(() => {
    if (user.isLoaded) {
      const data = user.data;
      const socketId = socket.id;
      socket.emit('online', { data, socketId });

      socket.on('message', ({ user, message, chat }) => {
        setOnlineMessages([...onlineMessages, { user, chat, content: message }]);
        getOnlineMessages({ user, chat, content: message });
      });

      socket.on('new-chat', chatId => {
        getChats(chats => {
          chats.forEach(chat => {
            joinChat(chat._id);
          })
        });
      });

      getChats(chats => {
        chats.forEach(chat => {
          joinChat(chat._id);
        })
      });
    }
  }, [user.isLoaded]);

  useEffect(() => {
    let dialog;
    onlineMessages.forEach(message => {
      if (message.chat !== chat.activeChat) {
        dialog = document.getElementById(message.chat);
        dialog.children[0].children[1].classList.add('new-message');
      }
    });
  }, [onlineMessages]);

  const openSearch = e => {
    e.preventDefault();
    const chatDialog = document.getElementById('chat-dialog-back');
    chatDialog.style.display = 'initial';
  }

  const joinChat = chat => {
    socket.emit('joinChat', chat);
  }

  const sendMessage = (user, message, chat) => {
    socket.emit('message', { user, message, chat });
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
              <Dialogs joinChat={joinChat} />
              <div className='chat-area'>
                {user.isAuthenticated ?
                  <Fragment>
                    {
                      (chat && chat.activeChat !== -1) ?
                        <Fragment>
                          <div className='chat-area-block header'>Чат</div>
                          <Messages />
                          <Input sendMessage={sendMessage} />
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
  getOnlineMessages: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth,
  socket: state.auth.socket,
  chat: state.chat
});

export default connect(mapStateToProps, { getChats, getOnlineMessages })(Chat);
