import React from 'react';
import Title from '../../components/Title/Title';
import './ServicesPage.scss';
import ServicesContent from './content.json';
import Hero from '../../components/Hero/Hero';
import Tag from '../../components/Tag/Tag';

const ServicesPage = () => (
  <div className="services-page">
    <Hero {...ServicesContent.hero} />

    {ServicesContent.sections.map(
      ({ title, description, activities }, index) => (
        <section className="services-page-section" key={`service-${index}`}>
          <Title
            level={2}
            content={title}
            marginBottom={16}
            subtitled={false}
          />
          <p className="services-page-section-description">{description}</p>
          <div className="tagset">
            {activities.map((activity, indexActivity) => (
              <Tag
                key={`service-${index}-activity-${indexActivity}`}
                text={activity}
              />
            ))}
          </div>
        </section>
      )
    )}
  </div>
);

export default ServicesPage;
