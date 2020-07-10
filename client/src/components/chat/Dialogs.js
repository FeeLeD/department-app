import React, { Fragment } from 'react';
import Dialog from './Dialog';
import { connect } from 'react-redux';

const Dialogs = ({ user, chat }) => {
  return (
    <Fragment>
      <div id='dialogs-container' className='dialogs'>
        {(user && user.isAuthenticated) ?
          <Fragment>
            { (chat && chat.chats) && 
              chat.chats.map(c => 
                <Dialog
                  key={c._id}
                  id={c._id}
                  name={c.name}
                  users={c.users} 
                />) 
            }
          </Fragment>
          :
          <div className='dialog-unavailable'>
            <span>Чат недоступен...</span>
          </div>
        }
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.auth,
  chat: state.chat
});

export default connect(mapStateToProps)(Dialogs);