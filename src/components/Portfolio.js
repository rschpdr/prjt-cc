import React from 'react';

const Portfolio = props => {
  console.log(props);
  const projects = props.projects.map(project => {
    return (
      <div key={project.id} className="column column__large-4 column__medium-6">
        <img
          src={project.covers['404']}
          alt={project.name}
          title={project.name}
        />
      </div>
    );
  });

  return (
    <div className="content">
      <div className="row">{projects}</div>
    </div>
  );
};

export default Portfolio;
