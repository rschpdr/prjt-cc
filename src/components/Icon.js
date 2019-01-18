import React from 'react';
import svgSprite from '../assets/images/sprites/icon.svg';

const Icon = props => {
  return (
    <svg
      height={props.height}
      width={props.width}
      className={`icon icon-${props.name}`}
    >
      <use xlinkHref={`#icon_${props.name}`} />
    </svg>
  );
};

export default Icon;
