import React, { useState } from 'react';
import { connect } from 'react-redux';

import plane from '../../images/plane.png';
import clip from '../../images/clip.png';

import postMessage from '../../utils/postMessage';

const Input = ({ user, chat, sendMessage }) => {
  const [message, setMessage] = useState('');

  const send = e => {
    e.preventDefault();

    if (message === '') return;

    const messageData = {
      chatId: chat.activeChat,
      userId: user.data._id,
      firstName: user.data.firstName,
      middleName: user.data.middleName,
      secondName: user.data.secondName,
      content: message
    };

    postMessage(messageData);
    sendMessage(user.data, message, chat.activeChat);
    setMessage('');
  };

  return (
    <div className='chat-area-block input'>
      <div>
        <button>
          <img className='img-clip' src={clip} alt='Att' />
        </button>
      </div>
      <div>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          maxLength='300'
          placeholder='Ваше сообщение...'
        />
      </div>
      <div>
        <button onClick={e => send(e)}>
          <img className='img-plane' src={plane} alt='Go' />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth,
  chat: state.chat
});

export default connect(mapStateToProps)(Input);
