import React from 'react';
import Title from '../../components/Title/Title';
import './ServicesPage.scss';
import services from './services.json';

const ServicesPage = () => (
  <div className="services-page">
    <div className="content-wrapper header-wrapper">
      <Title content="Serviços que oferecemos" marginBottom={8} />
    </div>

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
