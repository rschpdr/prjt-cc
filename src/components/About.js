import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="content">
      <Fade>
        <img
          src="http://via.placeholder.com/885x460"
          alt="description"
          title="title"
          className="content__image"
        />
      </Fade>
      <div className="content__description">
        <Fade bottom>
          <span>sobre</span>
          <h1 className="content__title">Quem sou eu?</h1>
        </Fade>
        <Fade bottom>
          <p className="content__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Fade>
        <Fade bottom>
          <p className="content__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
