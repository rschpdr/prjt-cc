import React from 'react';
import svgSprite from '../assets/images/sprites/symbol-defs.svg';

const Icon = props => {
  return (
    <svg
      height={props.height}
      width={props.width}
      className={`icon icon-${props.name}`}
    >
      <use xlinkHref={`#symbol-defs_${props.name}`} />
    </svg>
  );
};

export default Icon;
