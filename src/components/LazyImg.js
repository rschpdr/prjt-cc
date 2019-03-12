import React from 'react';
import Fade from 'react-reveal/Fade';

const LazyImg = props => {
  return (
    <Fade>
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
    </Fade>
  );
};

export default LazyImg;
