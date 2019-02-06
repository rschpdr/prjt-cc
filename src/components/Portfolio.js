import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'react-router-dom';
import qs from 'query-string';

const API_KEY = 'x8fCQnDWe9hC20uZ7vgnmvWXuf9pplBb';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  async componentDidMount() {
    const response = await jsonp(URL, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({ projects: data.projects });
      }
    });
    return response;
  }

  renderThumbnails = project => {
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
  };

  renderProjects() {
    return this.state.projects.map(project => {
      return this.renderThumbnails(project);
    });
  }

  filterProjects() {
    const queryString = this.parseQueryString();
    return this.state.projects.map(project => {
      if (project.fields.includes(queryString.filter)) {
        return this.renderThumbnails(project);
      }
      return null;
    });
  }

  parseQueryString = () => {
    const queryString = qs.parse(this.props.location.search);
    return queryString;
  };

  render() {
    const queryString = this.parseQueryString();

    if (!this.state.projects) {
      return <div>Loading...</div>;
    }

    return (
      <div className="content">
        <div className="row">
          <div className="breadcrumb">
            <span>Portfolio</span>
            <span>
              {queryString.filter !== undefined
                ? ` > ${queryString.filter}`
                : null}
            </span>
          </div>
          {queryString.filter !== undefined
            ? this.filterProjects()
            : this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Portfolio;
