import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar />
            <Switch />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
