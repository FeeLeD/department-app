import React from 'react';

const SearchedUser = ({ user, addUser }) => {

  return(
    <div onClick={e => addUser(user)} className='searched-user'>
      <span>{`${user.firstName} ${user.middleName} ${user.secondName}`}</span>
    </div>
  );
}

export default SearchedUser;