import React, { Fragment } from 'react';
import Dialog from './Dialog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dialogs = ({ user }) => {
  return (
    <Fragment>
      <div id='dialogs-container' className='dialogs'>
        {user.isAuthenticated ?
          <Fragment>
            <Dialog />
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

Dialog.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Dialogs);