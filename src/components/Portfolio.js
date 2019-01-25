import React, { Component } from 'react';
import jsonp from 'jsonp';
import { Link } from 'react-router-dom';

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
    return this.state.projects.map(project => {
      if (project.fields.includes(this.props.filterBy)) {
        return this.renderThumbnails(project);
      }
    });
  }

  resetFilters(e) {
    e.preventDefault();
    return this.props.resetFilters();
  }

  render() {
    if (!this.state.projects) {
      return <div>Loading...</div>;
    }

    return (
      <div className="content">
        <div className="row">
          <div className="breadcrumb">
            <a onClick={e => this.resetFilters(e)}>Portfolio > </a>
            <span>{this.props.filterBy}</span>
          </div>
          {this.props.filterBy != null
            ? this.filterProjects()
            : this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Portfolio;
