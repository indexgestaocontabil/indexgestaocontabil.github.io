import { Fragment } from 'react';
import {
  FiCompass,
  FiEye,
  FiShield,
  FiAward,
  FiUserCheck,
  FiHeart,
  FiTarget,
  FiZap,
  FiSmile,
} from 'react-icons/fi';
import { IconType } from '../../types';
import Hero from '../../components/Hero/Hero';
import AboutContent from './content.json';
import { ReactComponent as Logo } from '../../assets/img/logo-dourada.svg';
import './AboutPage.scss';

const VALUE_ICONS: Record<string, IconType> = {
  Ética: FiShield,
  Excelência: FiAward,
  Confiança: FiUserCheck,
  Humanização: FiHeart,
  Comprometimento: FiTarget,
  Inovação: FiZap,
  Humildade: FiSmile,
};

const AboutPage = () => (
  <div className="about">
    <Hero {...AboutContent.hero} />

    <section className="about-section about-us">
      <div className="about-us-text">
        <span className="eyebrow">Sobre</span>
        <h2>Conheça a INDEX Gestão Contábil</h2>

        {AboutContent.about.map((paragraph, index) => (
          <p key={`about-paragraph-${index}`}>{paragraph}</p>
        ))}

        <p className="acrostic-intro">{AboutContent.acrostic.intro}</p>
        <p className="acrostic-line">
          {AboutContent.acrostic.items.map((item, index) => (
            <Fragment key={`acrostic-${index}`}>
              <strong className="acrostic-letter">{item.letter}</strong>
              {item.rest}
              {index < AboutContent.acrostic.items.length - 2 && ', '}
              {index === AboutContent.acrostic.items.length - 2 && ' e '}
              {index === AboutContent.acrostic.items.length - 1 && '.'}
            </Fragment>
          ))}
        </p>
      </div>

      <div className="about-us-logo">
        <Logo />
      </div>
    </section>

    <section className="about-section about-mission-vision">
      <div className="mv-card">
        <div className="icon-box">
          <FiCompass />
        </div>
        <h3>Nossa Missão</h3>
        <p>{AboutContent.mission}</p>
      </div>

      <div className="mv-card">
        <div className="icon-box">
          <FiEye />
        </div>
        <h3>Nossa Visão</h3>
        <p>{AboutContent.vision}</p>
      </div>
    </section>

    <section className="about-section about-values">
      <div className="about-section-heading">
        <span className="eyebrow">Valores</span>
        <h2>Nossos Valores</h2>
        <p>{AboutContent.values.text}</p>
      </div>

      <div className="about-values-grid">
        {AboutContent.values.tags.map(({ label, description }, index) => {
          const Icon = VALUE_ICONS[label] || FiShield;

          return (
            <div className="value-card" key={`value-${index}`}>
              <div className="icon-box">
                <Icon />
              </div>
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  </div>
);

export default AboutPage;
