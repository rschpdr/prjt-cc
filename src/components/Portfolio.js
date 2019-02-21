import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import qs from 'query-string';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  renderThumbnails = project => {
    return (
      <Link key={project.id} to={`/projetos/${project.id}`}>
        <div
          className={`column column__large-4 column__medium-6 ${
            this.state.loaded ? 'column--loaded' : null
          }`}
        >
          <img
            src={project.covers['404']}
            alt={project.name}
            title={project.name}
          />
        </div>
      </Link>
    );
  };

  renderProjects = () => {
    return this.props.projects.map(project => {
      return this.renderThumbnails(project);
    });
  };

  filterProjects = () => {
    const queryString = this.parseQueryString();
    return this.props.projects.map(project => {
      if (project.fields.includes(queryString.filter)) {
        return this.renderThumbnails(project);
      }
      return null;
    });
  };

  parseQueryString = () => {
    const queryString = qs.parse(this.props.location.search);
    return queryString;
  };

  render() {
    const queryString = this.parseQueryString();

    if (!this.props.projects) {
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
