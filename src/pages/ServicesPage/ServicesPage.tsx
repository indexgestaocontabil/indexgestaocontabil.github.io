import React from 'react';
import Title from '../../components/Title/Title';
import './ServicesPage.scss';
import services from './services.json';
import Hero from '../../components/Hero/Hero';
import { HERO } from '../../globals';

const ServicesPage = () => (
  <div className="services-page">
    <Hero {...HERO.services} />

    {services.map(({ title, description, activities }, index) => (
      <section className="services-page-section" key={`service-${index}`}>
        <Title level={2} content={title} marginBottom={16} subtitled={false} />
        <p className="services-page-section-description">{description}</p>
        <div className="tagset">
          {activities.map((activity, indexActivity) => (
            <div
              className="tag"
              key={`service-${index}-activity-${indexActivity}`}
            >
              {activity}
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);

export default ServicesPage;
