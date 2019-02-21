import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = props => {
  return (
    <li>
      <NavLink to={props.route} exact activeClassName="current-page">
        {props.text}
      </NavLink>
    </li>
  );
};

export default MenuItem;
