import React from 'react';
import Fade from 'react-reveal/Fade';

const Spinner = () => {
  return (
    <Fade>
      <div className="spinner" data-testid="spinner" />
    </Fade>
  );
};

export default Spinner;
