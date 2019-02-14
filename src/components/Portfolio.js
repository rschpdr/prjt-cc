import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';

const Portfolio = props => {
  const renderThumbnails = project => {
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

  const renderProjects = () => {
    return props.projects.map(project => {
      return renderThumbnails(project);
    });
  };

  const filterProjects = () => {
    const queryString = parseQueryString();
    return props.projects.map(project => {
      if (project.fields.includes(queryString.filter)) {
        return renderThumbnails(project);
      }
      return null;
    });
  };

  const parseQueryString = () => {
    const queryString = qs.parse(props.location.search);
    return queryString;
  };

  const queryString = parseQueryString();

  if (!props.projects) {
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
        {queryString.filter !== undefined ? filterProjects() : renderProjects()}
      </div>
    </div>
  );
};

export default Portfolio;
