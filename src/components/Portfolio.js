import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Fade from 'react-reveal/Fade';
import qs from 'query-string';
import ImgLoader from './ImgLoader';
const LazyImg = lazy(() => import('./LazyImg'));

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  renderThumbnails = project => {
    return (
      <Flipped
        key={project.id}
        flipId={project.id}
        onExit={el => {
          setTimeout(() => {
            el.classList.add('animated-out');
          }, 10);
        }}
      >
        <div className="column column__large-4 column__medium-6">
          <Link to={`/projetos/${project.id}`}>
            <Suspense fallback={<ImgLoader paddingBottom="78%" />}>
              <LazyImg
                src={project.covers['404']}
                alt={project.name}
                title={project.name}
              />
            </Suspense>
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
    const filteredProjects = this.props.projects.filter(project =>
      project.fields.includes(queryString.filter)
    );
    return filteredProjects.map(project => {
      return this.renderThumbnails(project);
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
          <Fade>
            <Flipper flipKey={queryString.filter}>
              {queryString.filter !== undefined
                ? this.filterProjects()
                : this.renderProjects()}
            </Flipper>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Portfolio;
