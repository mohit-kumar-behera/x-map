import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/home';
import Login from './components/login';
import Register from './components/register';
import Profile from './Pages/Profile';
import Explore from './Pages/Explore';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} /> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </Router>
  );
}


export default App;
