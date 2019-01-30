import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Project from './Project';
import ContactForm from './ContactForm';
import About from './About';

class App extends Component {
  state = {
    selectedCategorie: null
  };

  onCategorieClick = e => {
    this.setState({ selectedCategorie: e.target.innerText });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar onCategorieClick={this.onCategorieClick} />
            <Switch>
              <Route path="/" exact component={Portfolio} />
              <Route path="/projetos/:id" exact component={Project} />
              <Route path="/contato" exact component={ContactForm} />
              <Route path="/sobre" exact component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
