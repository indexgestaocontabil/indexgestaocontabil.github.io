import React from 'react';
import './HomePage.scss';
import HomeContent from './content.json';
import Hero from '../../components/Hero/Hero';
import SolutionItem from './SolutionItem/SolutionItem';
import Slides from '../../components/Slides/Slides';
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import { BiSupport } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'support':
      return BiSupport;

    case 'user-friends':
      return FaUserFriends;
  }
};

const HomePage = () => {
  const slides: JSX.Element[] = HomeContent.slides.map((slide, index) => (
    <Hero {...slide} key={`hero-${index}}`} height={60} heightUnit="vh" />
  ));

  const renderFeaturedServices = () => (
    <section className="content-wrapper featured-services">
      <Title
        content={HomeContent.featuredItems.title}
        level={2}
        subtitled={false}
        marginBottom={16}
        textAlign="center"
      />

      <div className="featured-services-wrapper">
        {HomeContent.featuredItems.items.map(
          ({ icon, title, description }, index) => {
            const props = {
              title,
              description,
              Icon: getIcon(icon),
            };

            return <FeaturedItem {...props} key={`featured-item-${index}`} />;
          }
        )}
      </div>
    </section>
  );

  const renderSolutions = () => (
    <section className="content-wrapper solution">
      <Title
        content={HomeContent.solutions.title}
        level={2}
        subtitled={false}
        textAlign="center"
        marginBottom={16}
      />

      <div className="solution-items-wrapper">
        {HomeContent.solutions.items.map((solutionItem, index) => (
          <SolutionItem
            {...solutionItem}
            width="31"
            widthUnit="%"
            key={`solution-item-${index}`}
          />
        ))}
      </div>

      <p className="solution-items-undertitle">
        Você pode verificar mais detalhes <Link to="/servicos">aqui</Link>.
      </p>
    </section>
  );

  return (
    <>
      <Slides slides={slides} />
      {renderFeaturedServices()}
      {renderSolutions()}
    </>
  );
};

export default HomePage;
