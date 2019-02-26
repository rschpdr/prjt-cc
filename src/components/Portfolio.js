import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Fade from 'react-reveal/Fade';
import qs from 'query-string';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  renderThumbnails = project => {
    return (
      <Flipped key={project.id} flipId={project.id}>
        <div className="column column__large-4 column__medium-6">
          <Link to={`/projetos/${project.id}`}>
            <div className="aspect aspect--4x3">
              <div className="aspect__inner">
                <Fade>
                  <img
                    src={project.covers['404']}
                    alt={project.name}
                    title={project.name}
                  />
                </Fade>
              </div>
            </div>
          </Link>
        </div>
      </Flipped>
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
        <Fade bottom>
          <div className="row">
            <div className="breadcrumb">
              <span>Portfolio</span>
              <span>
                {queryString.filter !== undefined
                  ? ` > ${queryString.filter}`
                  : null}
              </span>
            </div>
            <Flipper flipKey={queryString.filter}>
              {queryString.filter !== undefined
                ? this.filterProjects()
                : this.renderProjects()}
            </Flipper>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Portfolio;
