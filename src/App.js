import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Singin from './components/auth/Singin/Singin';
import Register from './components/auth/Register/Register';
import IndexApp from './components/index';
import Shop from './components/shop/Shop';
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ IndexApp } />
        <Switch>
          <Route path="/login" component={ Singin }/>
          <Route path="/register" component={ Register }/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
