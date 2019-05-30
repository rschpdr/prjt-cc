import React, { lazy, Suspense } from 'react';
import Fade from 'react-reveal/Fade';
import ImgLoader from './ImgLoader';
import strings from '../strings';
import handleTranslation from '../helpers/handleTranslation';
const LazyImg = lazy(() => import('./LazyImg'));

const { about } = strings.pages;

const renderParagraphs = (paragraphs, language) => {
  return paragraphs.map(paragraph => {
    return (
      <Fade bottom key={paragraph[handleTranslation(language)]}>
        <p className="content__paragraph">
          {paragraph[handleTranslation(language)]}
        </p>
      </Fade>
    );
  });
};

const About = props => {
  return (
    <div className="content">
      <Fade>
        <Suspense
          fallback={
            <ImgLoader className="content__image" paddingBottom="52%" />
          }
        >
          <LazyImg
            src="http://via.placeholder.com/885x460"
            alt="description"
            title="title"
            className="content__image"
          />
        </Suspense>
      </Fade>
      <div className="content__description">
        <Fade bottom>
          <span className="content__title--secondary">
            {about.secondaryTitle[handleTranslation(props.language)]}
          </span>
          <h1 className="content__title">
            {about.title[handleTranslation(props.language)]}
          </h1>
        </Fade>
        {renderParagraphs(about.paragraphs, props.language)}
      </div>
    </div>
  );
};

export default About;
