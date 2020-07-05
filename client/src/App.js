import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import './stylesheet/normalize.css';
import './stylesheet/default.css';
import './stylesheet/navbar.css';
import './stylesheet/chat.css';
import './stylesheet/login.css';
import './stylesheet/footer.css';

// Components 
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Alert from './components/Alert';
import Login from './components/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Login />
        <Navbar />
        <Switch>
          <Route exact path="/chat" component={Chat} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;
