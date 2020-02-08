import React, { Component } from 'react';
import HeaderWeb from './components/base/header/HeaderWeb'
import FooterWeb from './components/base/footer/FooterWeb';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderWeb/>
        <FooterWeb />
      </div>
    )
  }
}

export default App;
