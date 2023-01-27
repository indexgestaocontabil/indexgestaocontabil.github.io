import React from 'react';
import './HomePage.scss';
import Slides from '../../components/Slides/Slides';
import HomeContent from './content.json';
import Hero from '../../components/Hero/Hero';

const HomePage = () => {
  const slides: JSX.Element[] = HomeContent.slides.map((slide, index) => (
    <Hero {...slide} key={`hero-${index}}`} />
  ));

  return (
    <>
      <Slides slides={slides} />
      <div className="content-wrapper">
        <h1>Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
