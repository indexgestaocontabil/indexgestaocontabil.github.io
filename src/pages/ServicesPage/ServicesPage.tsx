import {
  FiFileText,
  FiPercent,
  FiUsers,
  FiShield,
  FiCompass,
  FiCheck,
} from 'react-icons/fi';
import { IconType } from '../../types';
import Hero from '../../components/Hero/Hero';
import ServicesContent from './content.json';
import './ServicesPage.scss';

const SECTION_ICONS: Record<string, IconType> = {
  'Área Contábil': FiFileText,
  'Área Tributária': FiPercent,
  'Área Trabalhista': FiUsers,
  'Legalização e Procuradoria': FiShield,
  'Consultoria Empresarial e Tributária': FiCompass,
};

const ServicesPage = () => (
  <div className="services-page">
    <Hero {...ServicesContent.hero} />

    {ServicesContent.sections.map(
      ({ title, description, activities }, index) => {
        const Icon = SECTION_ICONS[title] || FiFileText;
        const isEven = index % 2 === 1;

        return (
          <section
            className={`services-block ${isEven ? 'services-block-alt' : ''}`}
            key={`service-${index}`}
          >
            <div className="services-block-heading">
              <div className="icon-box">
                <Icon />
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            <div className="services-block-activities">
              {activities.map((activity, activityIndex) => (
                <div
                  className="activity-chip"
                  key={`service-${index}-activity-${activityIndex}`}
                >
                  <FiCheck /> {activity}
                </div>
              ))}
            </div>
          </section>
        );
      }
    )}
  </div>
);

export default ServicesPage;
