import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveChat, getMessages } from '../../actions/chat';

const Dialog = ({ id, name, users, setActiveChat, getMessages }) => {
  const onClick = () => {
    setActiveChat(id);
    getMessages(id);
  }

  return (
    <div id={id} onClick={() => onClick()} className='dialog'>
      {
        users.length > 2 ?
        <div>{name}</div> :
        <div>Private</div>
      }
      <div>msg</div>
    </div>
  );
}

Dialog.propTypes = {
  setActiveChat: PropTypes.func.isRequired
};

export default connect(null, { setActiveChat, getMessages })(Dialog);
