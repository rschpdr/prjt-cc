import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jsonp from 'jsonp';
import _ from 'lodash';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Project from './Project';
import ContactForm from './ContactForm';
import About from './About';

const API_KEY = 'x8fCQnDWe9hC20uZ7vgnmvWXuf9pplBb';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`;

class App extends Component {
  state = {
    categories: [],
    selectedCategorie: null
  };

  async componentDidMount() {
    const response = await jsonp(URL, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let categories = _.uniq(
          _.flatten(data.projects.map(arr => arr.fields))
        );
        this.setState({ categories });
      }
    });
  }

  onCategorieClick = e => {
    this.setState({ selectedCategorie: e.target.innerText });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar
              onCategorieClick={this.onCategorieClick}
              categories={this.state.categories}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Portfolio
                    filterBy={this.state.selectedCategorie}
                    categories={this.state.categories}
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
