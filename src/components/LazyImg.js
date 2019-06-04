import React from "react";

const LazyImg = props => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      className={props.className}
      style={{
        width: "100%",
        height: props.height
      }}
    />
  );
};

export default LazyImg;
