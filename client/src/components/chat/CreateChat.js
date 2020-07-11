import React, { useState } from 'react';
import SearchedUser from './SearchedUser';
import ChosenUser from './ChosenUser';
import findUsers from '../../utils/searchUser';

const CreateChat = () => {
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

  const CreateChat = () => {
    
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
            <button onClick={e => CreateChat()}>Создать конференцию</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateChat

