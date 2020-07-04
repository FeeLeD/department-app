import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styles
import './stylesheet/normalize.css';
import './stylesheet/default.css';
import './stylesheet/navbar.css';
import './stylesheet/chat.css';

// Components 
import Navbar from './components/Navbar';
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;
