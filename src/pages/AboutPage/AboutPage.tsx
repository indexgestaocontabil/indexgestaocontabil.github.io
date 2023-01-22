import React from 'react';
import Hero from '../../components/Hero/Hero';
import './AboutPage.scss';
import AboutContent from './content.json';

const AboutPage = () => (
  <>
    <Hero {...AboutContent.hero} />
    <div className="content-wrapper">
      <h1>About Page</h1>
    </div>
  </>
);

export default AboutPage;
