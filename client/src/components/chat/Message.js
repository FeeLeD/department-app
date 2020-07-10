import React from 'react';

const Message = ({ user, content, date, outComing }) => {
  return (
    <div className={outComing ? 'message-area outComing' : 'message-area'}>
      <div className='message'>
        <div>
          <span>{`${user.firstName} ${user.middleName}`}</span>
          <span className='span-date'>{date}</span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Message;
