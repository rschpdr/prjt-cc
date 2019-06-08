import React from 'react';
import Logo from '../assets/images/logo.svg';
import devLogo from '../assets/images/devLogo.svg';

const Icon = props => {
  return (
    <svg height={props.height} width={props.width} data-testid="logo">
      <use xlinkHref={`#${props.filename}_${props.id}`} />
    </svg>
  );
};

export default Icon;
