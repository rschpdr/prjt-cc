import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  return (
    <li>
      <Link to={props.route}>{props.text}</Link>
    </li>
  );
};

export default MenuItem;
