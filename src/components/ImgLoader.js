import React from 'react';
import { relative } from 'path';

const ImgLoader = props => {
  return (
    <div
      style={{
        position: relative,
        paddingBottom: props.paddingBottom,
        backgroundColor: '#cccccc',
        width: '100%'
      }}
      data-testid="imgloader"
    />
  );
};

export default ImgLoader;
