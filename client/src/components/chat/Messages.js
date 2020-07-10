import React from 'react';
import Message from './Message';
import { connect } from 'react-redux';


const Messages = ({ user, chat }) => {
  return (
    <div className='chat-area-block messages'>
      {
        (chat && chat.messages.length > 0) &&
          chat.messages.map(c => 
            <Message
              key={c._id}
              user={c.user}
              content={c.content}
              date={c.date}
              outComing={user.data._id === c.user.id}
            />
          )
      }
    </div>
  );
}

const mapStateToProps = state => ({
  chat: state.chat,
  user: state.auth
});

export default connect(mapStateToProps)(Messages);
