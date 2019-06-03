import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Fade from 'react-reveal/Fade';
import qs from 'query-string';
import ImgLoader from './ImgLoader';
const LazyImg = lazy(() => import('./LazyImg'));

const Portfolio = props => {
  const renderThumbnails = project => {
    return (
      <Flipped
        key={project.id}
        flipId={project.id}
        onExit={el => {
          setTimeout(() => {
            el.classList.add('column--animated-out');
          }, 10);
        }}
      >
        <div className="column column__large-4 column__medium-6">
          <Link to={`/projetos/${project.id}`}>
            <Suspense fallback={<ImgLoader paddingBottom="78%" />}>
              <Fade>
                <picture>
                  <source
                    srcSet={project.covers['808']}
                    media="(min-width: 1900px)"
                  />
                  <LazyImg
                    src={project.covers['404']}
                    alt={project.name}
                    title={project.name}
                  />
                </picture>
              </Fade>
            </Suspense>
          </Link>
        </div>
      </Flipped>
    );
  };

  const renderProjects = () => {
    return props.projects.map(project => {
      return renderThumbnails(project);
    });
  };

  const filterProjects = () => {
    const queryString = parseQueryString();
    const filteredProjects = props.projects.filter(project =>
      project.fields.includes(queryString.filter)
    );
    return filteredProjects.map(project => {
      return renderThumbnails(project);
    });
  };

  const parseQueryString = () => {
    const queryString = qs.parse(props.location.search);
    return queryString;
  };

  const renderBreadcrumb = () => {
    if (queryString.filter) {
      return (
        <div className="breadcrumb">
          <span>
            {queryString.filter !== undefined
              ? `Portfolio > ${queryString.filter}`
              : null}
          </span>
        </div>
      );
    } else {
      return null;
    }
  };

  const queryString = parseQueryString();

  if (!props.projects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <div className="row">
        {renderBreadcrumb()}
        <Flipper flipKey={queryString.filter}>
          {queryString.filter !== undefined
            ? filterProjects()
            : renderProjects()}
        </Flipper>
      </div>
    </div>
  );
};

export default Portfolio;