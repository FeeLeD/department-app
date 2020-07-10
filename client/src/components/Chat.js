import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Images
import search from '../images/search.png';
import menu from '../images/menu.png';
import chatIcon from '../images/chat_icon.png';
import chat from '../images/chat.png';

// Components
import Header from './chat/Header';
import Dialogs from './chat/Dialogs';
import Messages from './chat/Messages';
import Input from './chat/Input';
import Search from './chat/Search';

const Chat = ({ user }) => {
  const [isSearchOpened, setSearchOpened] = useState(false);

  const openSearch = e => {
    e.preventDefault();
    const dialogsDiv = document.getElementById('dialogs-container');
    const searchDiv = document.getElementById('search-container');

    if (isSearchOpened) {
      setSearchOpened(false);
      dialogsDiv.style.display = 'initial';
      searchDiv.style.display = 'none';
    } else {
      setSearchOpened(true);
      dialogsDiv.style.display = 'none';
      searchDiv.style.display = 'initial';
    }
  }

  return (
    <div className='chat-container'>
      {
        (user.loading && localStorage.token) ?
          <div className='chat-loading'>
            ЗАГРУЗКА...
          </div>
          :
          <Fragment>
            <Header />
            <div className='chat-main'>
              <div className='left-panel'>
                {user.isAuthenticated &&
                  <Fragment>
                    <button onClick={e => openSearch(e)}>
                      <img src={isSearchOpened ? chatIcon : search} alt='S' />
                    </button>
                    <button>
                      <img src={menu} alt='M' />
                    </button>
                  </Fragment>
                }
              </div>
              <Search />
              <Dialogs />
              <div className='chat-area'>
                {user.isAuthenticated ?
                  <Fragment>
                    <div className='chat-area-block header'>
                      User
              </div>
                    <Messages />
                    <Input />
                  </Fragment>
                  :
                  <div className='chat-area-image-container'>
                    <img src={chat} alt='Chat' />
                  </div>
                }
              </div>
            </div>
          </Fragment>
      }

    </div>
  )
};

Chat.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Chat);
