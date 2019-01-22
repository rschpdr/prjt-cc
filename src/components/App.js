import '../assets/styles/styles.scss';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jsonp from 'jsonp';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Project from './Project';
import ContactForm from './ContactForm';
import About from './About';

const API_KEY = 'dsLxU0oVIJdF25SQBZEwwEAL7N8aTLE3';
const USERNAME = 'carolcarretto';

class App extends Component {
  state = { projects: [] };

  async componentDidMount() {
    const response = await jsonp(
      `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`,
      null,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({ projects: data.projects });
        }
      }
    );
  }

  renderProps = props => {
    return;
  };

  render() {
    if (!this.state.projects) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <BrowserRouter>
          <div className="wrapper">
            <Sidebar />
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Portfolio projects={this.state.projects} />}
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
