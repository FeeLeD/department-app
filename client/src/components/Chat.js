import React from 'react';

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
          <button>1</button>
          <button>2</button>
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
