import React, { useState, useEffect } from 'react';
import Message from './Message';
import tick from '../../images/tick.png';
import { connect } from 'react-redux';
import getMessages from '../../utils/getMessages';


const Messages = ({ user, chat }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    getMessages(chat.activeChat)
      .then(data => {
        setMessages(data);
        setIsLoading(false);
      });
  }

  /*const readMessages = () => {
    scrollDown();
    clearDown();
    deleteEventListener();
  }*/

  useEffect(() => {
    scrollDown();
  });

  useEffect(() => {
    if (chat.activeChat !== -1) {
      setIsLoading(true);
      loadMessages();
    }
  }, [chat.activeChat]);

  useEffect(() => {
    chat.onlineMessages.forEach(message => {
      if (message.chat === chat.activeChat) {
        setMessages([...messages, message]);
      }
    });
  }, [chat.onlineMessages]);

  if (isLoading) {
    return (
      <div className='chat-area-block messages'>
        <div className='loading'>Загрузка...</div>
      </div>);
  }

  return (
    <div id='messages' className='chat-area-block messages'>
      {
        (messages.length > 0) && messages.map((c, index) =>
          <Message
            key={c._id || index}
            user={c.user}
            content={c.content}
            date={c.date}
            outComing={user.data._id === c.user._id}
          />
        )
      }
    </div>
  );
}

/*
  <div onClick={e => readMessages()} id='tick-down' className='new-messages'>
    <img src={tick} alt='Down' />
  </div>
*/

const scrollDown = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv) {
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

const showDown = () => {
  const downDiv = document.getElementById('tick-down');
  downDiv.style.display = 'flex';
}

const clearDown = () => {
  const downDiv = document.getElementById('tick-down');
  downDiv.style.display = 'none';
}

const listener = () => {
  const messagesDiv = document.getElementById('messages');
  if (messagesDiv.scrollTop === messagesDiv.scrollHeight - messagesDiv.clientHeight) {
    clearDown();
    deleteEventListener();
  }
}

const setListenerOnScroll = () => {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.addEventListener('scroll', listener);
}

const deleteEventListener = () => {
  const messagesDiv = document.getElementById('messages');
  messagesDiv.removeEventListener('scroll', listener);
}

const mapStateToProps = state => ({
  chat: state.chat,
  user: state.auth
});

export default connect(mapStateToProps)(Messages);
