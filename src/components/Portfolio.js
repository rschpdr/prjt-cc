import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'react-router-dom';

const API_KEY = 'dsLxU0oVIJdF25SQBZEwwEAL7N8aTLE3';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`;

class Portfolio extends Component {
  state = { projects: [] };

  async componentDidMount() {
    const response = await jsonp(URL, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ projects: data.projects });
      }
    });
  }

  renderProjects() {
    return this.state.projects.map(project => {
      return (
        <Link key={project.id} to={`/projetos/${project.id}`}>
          <div className="column column__large-4 column__medium-6">
            <img
              src={project.covers['404']}
              alt={project.name}
              title={project.name}
            />
          </div>
        </Link>
      );
    });
  }

  render() {
    if (!this.state.projects) {
      return <div>Loading...</div>;
    }

    return (
      <div className="content">
        <div className="row">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default Portfolio;
