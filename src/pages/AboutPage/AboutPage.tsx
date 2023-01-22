import React from 'react';
import Hero from '../../components/Hero/Hero';
import './AboutPage.scss';
import AboutContent from './content.json';
import logo from '../../assets/img/logo-big-amarela.png';
import Title from '../../components/Title/Title';
import Tag from '../../components/Tag/Tag';

const AboutPage = () => (
  <div className="about">
    <Hero {...AboutContent.hero} />
    <section className="about-us content-wrapper">
      <div className="about-us-content">
        {AboutContent.about.map((content, index) => (
          <p key={`content-${index}`} className="about-us-content-paragraph">
            {content}
          </p>
        ))}
      </div>

      <img
        src={logo}
        alt="Logotipo da Index Gestão Contábil"
        className="logo"
      />
    </section>

    <section className="about-mission content-wrapper">
      <Title level={2} content="Nossa Missão" marginBottom={8} />
      <p className="about-mission-content">{AboutContent.mission}</p>
    </section>

    <section className="about-vision content-wrapper">
      <Title level={2} content="Nossa Visão" marginBottom={8} />
      <p className="about-vision-content">{AboutContent.vision}</p>
    </section>

    <section className="about-values content-wrapper">
      <Title level={2} content="Nossos Valores" marginBottom={8} />

      <p className="about-values-text">{AboutContent.values.text}</p>

      <div className="tagset">
        {AboutContent.values.tags.map(({ label, description }, index) => (
          <Tag text={label} key={`tag-${index}`} tooltip={description} />
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;
