import React from 'react';
import Logo from '../assets/images/logo.svg';

const Icon = props => {
  return (
    <svg height={props.height} width={props.width}>
      <use xlinkHref={`#logo_${props.name}`} />
    </svg>
  );
};

export default Icon;
