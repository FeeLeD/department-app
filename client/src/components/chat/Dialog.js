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
      <div>{name}</div>
      {
        users.length > 2 ?
        <div>{`Кол-во участников: ${users.length}`}</div> :
        <div>{`Личный`}</div>
      }
    </div>
  );
}

Dialog.propTypes = {
  setActiveChat: PropTypes.func.isRequired
};

export default connect(null, { setActiveChat, getMessages })(Dialog);
