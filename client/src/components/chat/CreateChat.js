import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alert';
import { getChats } from '../../actions/chat';

import SearchedUser from './SearchedUser';
import ChosenUser from './ChosenUser';
import findUsers from '../../utils/searchUser';
import createChat from '../../utils/createChat';


const CreateChat = ({ setAlert, getChats, user }) => {
  const [foundUsers, setFoundUsers] = useState([]);
  const [usersToAdd, setUsersToAdd] = useState([]);
  const [conference, setConference] = useState('');

  const closeSearch = e => {
    e.preventDefault();
    const chatDialog = document.getElementById('chat-dialog-back');
    chatDialog.style.display = 'none';
  }

  const onChange = async e => {
    if (e.target.value === '') {
      setFoundUsers([]);
    } else {
      const users = await findUsers(e.target.value);
      setFoundUsers(users);
    }
  }

  const addUser = userToAdd => {
    if (!usersToAdd.some(user => user._id === userToAdd._id))
      setUsersToAdd([...usersToAdd, userToAdd]);
  }

  const removeUser = userToRemove => {
    const updatedUsers = usersToAdd.filter(user => user._id !== userToRemove._id);
    setUsersToAdd(updatedUsers);
  }

  const createNewChat = () => {
    if (usersToAdd.length === 0) {
      setAlert('Добавьте пользователей', 'danger', 2000);
      return;
    }

    if (conference === '') {
      setAlert('Введите название конференции', 'danger', 2000);
      return;
    }

    const data = {
      users: [user.data._id, ...foundUsers.map(user => user._id)],
      name: conference
    }

    createChat(data, () => {
      getChats();
    });
  }

  return (
    <div id='chat-dialog-back' className='chat-dialog-back'>
      <div className='chat-dialog'>
        <div>
          <div className='input-container'>
            <input
              onChange={e => onChange(e)}
              placeholder='Поиск...'
              maxLength='20'
            />
          </div>
          <div className='string-container'>
            {
              foundUsers.length > 0 ? `Найдено пользователей: ${foundUsers.length}` :
                `Пользователи не найдены`
            }
          </div>
          <div className='results-container'>
            {
              foundUsers.length > 0 && foundUsers.map(user =>
                <SearchedUser
                  key={user._id}
                  user={user}
                  addUser={addUser}
                />)
            }
          </div>
        </div>
        <div>
          <div className='right-header'>
            <span>Выбранные пользователи</span>
            <button onClick={e => closeSearch(e)}>X</button>
          </div>
          <div className='right-main'>
            {
              usersToAdd.length > 0 ?
                usersToAdd.map(user =>
                  <ChosenUser
                    key={user._id}
                    user={user}
                    removeUser={removeUser}
                  />)
                :
                <div className='no-chosen-user'>
                  {`Пользователи не выбраны`}
                </div>
            }
          </div>
          <div className='right-bottom'>
            <input 
              value={conference}
              onChange={e => setConference(e.target.value)}
              placeholder='Введите название конференции'
              maxLength='50'
            />
            <button onClick={e => createNewChat()}>Создать конференцию</button>
          </div>
        </div>
      </div>
    </div>
  )
}

CreateChat.propTypes = {
  setAlert: PropTypes.func.isRequired,
  getChats: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps, { setAlert, getChats })(CreateChat);

