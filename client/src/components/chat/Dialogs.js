import React, { Fragment } from 'react';
import Dialog from './Dialog';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dialogs = ({ user }) => {
  return (
    <div className='dialogs'>
      {user.isAuthenticated ?
        <Fragment>
          <Dialog />
          <Dialog />
        </Fragment>
        :
        <div className='dialog-unavailable'>
          <span>Чат недоступен...</span>
        </div>
      }
    </div>
  );
}

Dialog.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth
});

export default connect(mapStateToProps)(Dialogs);