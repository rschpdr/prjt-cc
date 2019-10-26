import React, { lazy, Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import ImgLoader from './ImgLoader';
import strings from '../strings';
import handleTranslation from '../helpers/handleTranslation';
const LazyImg = lazy(() => import('./LazyImg'));

const { about } = strings.pages;

const renderParagraphs = (paragraphs, language) => {
  return paragraphs.map(paragraph => {
    const CustomTag = paragraph.tag;
    if (paragraph.tag === 'a') {
      return (
        <Fade bottom key={paragraph.lang[handleTranslation(language)]}>
          <CustomTag
            href={paragraph.href}
            className="content__paragraph content__paragraph--full-width"
          >
            {paragraph.lang[handleTranslation(language)]}
          </CustomTag>
        </Fade>
      );
    } else {
      return (
        <Fade bottom key={paragraph.lang[handleTranslation(language)]}>
          <CustomTag className="content__paragraph content__paragraph--full-width">
            {paragraph.lang[handleTranslation(language)]}
          </CustomTag>
        </Fade>
      );
    }
  });
};

const About = props => {
  document.title = `Carol Carretto | ${
    strings.ui.sidebarMenu.about[handleTranslation(props.language)]
  }`;
  return (
    <div className="content content--narrower">
      <Fade>
        <Suspense
          fallback={
            <ImgLoader className="content__image" paddingBottom="52%" />
          }
        >
          <LazyImg
            src={require('../assets/images/about.jpg')}
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
        <Fade bottom>
          <NavLink to="/contato" exact>
            {about.contactLink[handleTranslation(props.language)]}
          </NavLink>
        </Fade>
      </div>
    </div>
  );
};

export default About;
