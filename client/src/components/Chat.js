import React from 'react';

// Images
import search from '../images/search.png';
import menu from '../images/menu.png';

// Components
import Header from './chat/Header';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';

const Chat = () => {
  return (
    <div className='chat-container'>
      <Header />
      <div className='chat-main'>
        <div className='left-panel'>
          <button>
            <img src={search} />
          </button>
          <button>
            <img src={menu} />
          </button>
        </div>
        <Dialogs />
        <div className='chat-area'>
          <div className='chat-area-block header'>
            User
          </div>
          <Messages />
          <Input />
        </div>
      </div>
    </div>
  )
};

export default Chat;
