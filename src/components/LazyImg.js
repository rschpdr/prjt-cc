import React from 'react';
import Fade from 'react-reveal/Fade';

const LazyImg = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      className={props.className}
      style={{
        width: props.width,
        height: props.height
      }}
    />
  );
};

export default LazyImg;
