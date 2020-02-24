import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexApp from './components/index';
import routes from './routes/services/_routeServices';
class App extends Component {
  showContentMenu = (routes) => {
    let result = null;
    if(routes.length > 0 ) {
      result = routes.map((route, index) => {
        return (
          <Route path={route.path}  exact={route.exact} component={ route.component } key={index}/>
        )
      });
    }
    return result;
  };
  render() {
    return (
      <Router>
       
        <Switch>
          {/* <Route path="/login" component={ Singin }/>
          <Route path="/register" component={ Register }/>
          <Route path="/shop" component={ Shop }/>
          <Route path="/blog" component={ Blog } /> */}
          {this.showContentMenu(routes)}
        </Switch>
      </Router>
    )
  }
}

export default App;
