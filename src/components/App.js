import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import _ from 'lodash';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Project from './Project';
import ContactForm from './ContactForm';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategorie: null,
      windowWidth: 0
    };
    this.updateWindowDimensions = _.debounce(this.updateWindowDimensions, 1000);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onCategorieClick = e => {
    this.setState({ selectedCategorie: e.target.innerText });
  };

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar
              onCategorieClick={this.onCategorieClick}
              windowWidth={this.state.windowWidth}
            />
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
