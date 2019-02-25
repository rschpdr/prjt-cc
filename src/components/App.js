import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import _ from 'lodash';
import jsonp from 'jsonp';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Project from './Project';
import ContactForm from './ContactForm';
import About from './About';

const API_KEY = 'x8fCQnDWe9hC20uZ7vgnmvWXuf9pplBb';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      selectedCategorie: null,
      windowWidth: 0
    };
    this.updateWindowDimensions = _.debounce(this.updateWindowDimensions, 1000);
  }

  fetchData = async () => {
    // Search sessionStorage for projects array. If present, set state to it. If not, proceed to the API call.
    const cachedProjects = sessionStorage.getItem('projects');
    if (cachedProjects) {
      this.setState({ projects: JSON.parse(cachedProjects) });
      return;
    }

    // If no data is found in sessionStorage, make an API call, then save result to sessionStorage.
    const response = await jsonp(URL, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const { projects } = data;
        this.onFetchResult(projects, 'projects');
      }
    });
    return response;
  };

  onFetchResult(data, key) {
    // Save API call result to sessionStorage, then set state to it.
    sessionStorage.setItem(key, JSON.stringify(data));
    this.setState({ projects: data });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.fetchData();
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
              projects={this.state.projects}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={routeProps => (
                  <Portfolio {...routeProps} projects={this.state.projects} />
                )}
              />
              <Route path="/projetos/:id" exact component={Project} />
              <Route path="/contato" exact component={ContactForm} />
              <Route path="/sobre" exact component={About} />
            </Switch>
            {/* <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={1000}
                    classNames="images-animation"
                  >
                    <Switch location={location}>
                      <Route
                        path="/"
                        exact
                        render={routeProps => (
                          <Portfolio
                            {...routeProps}
                            projects={this.state.projects}
                          />
                        )}
                      />
                      <Route path="/projetos/:id" exact component={Project} />
                      <Route path="/contato" exact component={ContactForm} />
                      <Route path="/sobre" exact component={About} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
