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

  resetFilters = () => {
    this.setState({ selectedCategorie: null });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar onCategorieClick={this.onCategorieClick} />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Portfolio
                    filterBy={this.state.selectedCategorie}
                    resetFilters={this.resetFilters}
                  />
                )}
              />
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
