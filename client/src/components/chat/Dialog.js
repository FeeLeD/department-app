import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveChat } from '../../actions/chat';

const Dialog = ({ id, name, users, setActiveChat }) => {

  const onClick = async () => {
    setActiveChat(id);
    const dialog = document.getElementById(id);
    dialog.children[0].children[1].classList.remove('new-message');
  }

  return (
    <div id={id} onClick={() => onClick()} className='dialog'>
      <div>
        <span>{name}</span>
        <div></div>
      </div>
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

export default connect(null, { setActiveChat })(Dialog);
