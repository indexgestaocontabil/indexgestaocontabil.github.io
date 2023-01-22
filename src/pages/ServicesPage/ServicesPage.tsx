import React from 'react';
import Title from '../../components/Title/Title';
import './ServicesPage.scss';
import ServicesContent from './content.json';
import Hero from '../../components/Hero/Hero';
import Tag from '../../components/Tag/Tag';
import Folder from '../../components/Folder/Folder';
import { PARAMS } from '../../globals';

const ServicesPage = () => {
  const renderTagset = (activities: string[], index: number) => (
    <div className="tagset">
      {activities.map((activity, indexActivity) => (
        <Tag
          key={`service-${index}-activity-${indexActivity}`}
          text={activity}
        />
      ))}
    </div>
  );

  return (
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

            {PARAMS.VIEWPORT.IS_MOBILE ? (
              <Folder
                openTitle="Ver mais detalhes"
                closeTitle="Ver menos detalhes"
              >
                {renderTagset(activities, index)}
              </Folder>
            ) : (
              renderTagset(activities, index)
            )}
          </section>
        )
      )}
    </div>
  );
};
export default ServicesPage;
