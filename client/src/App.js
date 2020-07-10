import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setToken from './utils/setToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// Styles
import './stylesheet/normalize.css';
import './stylesheet/default.css';
import './stylesheet/navbar.css';
import './stylesheet/chat.css';
import './stylesheet/login.css';
import './stylesheet/footer.css';
import './stylesheet/alert.css';
import './stylesheet/profile.css';

// Components 
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Alert from './components/Alert';
import Login from './components/Login';
import Footer from './components/Footer';
import Main from './components/Main';
import Profile from './components/Profile';

if (localStorage.token)
  setToken(localStorage.token);

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Login />
        <Profile />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;
