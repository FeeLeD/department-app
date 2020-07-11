import React from 'react'

const ChosenUser = ({ user, removeUser }) => {
  return (
    <div className='chosen-user'>
      <div>
        <button onClick={e => removeUser(user)}>Убрать</button>
      </div>
      <div>
        <span>{`${user.firstName} ${user.middleName} ${user.secondName}`}</span>
        <span>{user.email}</span>
        <span>{user.rank}</span>
      </div>
    </div>
  )
}

export default ChosenUser
