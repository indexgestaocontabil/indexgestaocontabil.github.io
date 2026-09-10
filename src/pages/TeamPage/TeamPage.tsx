import { FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import Hero from '../../components/Hero/Hero';
import { MEMBERS } from '../../globals';
import { getWhatsAppLink, getLinkedinLink } from '../../utils/utilitary-functions';
import TeamContent from './content.json';
import './TeamPage.scss';

const TeamPage = () => (
  <div className="team-page">
    <Hero {...TeamContent.hero} />

    {Object.values(MEMBERS).map((member, index) => {
      const isEven = index % 2 === 1;
      const whatsappLink = getWhatsAppLink(
        member.phone.replace(/\(|\)|\s|-/g, '')
      );

      return (
        <section
          className={`executive-block ${isEven ? 'executive-block-alt' : ''}`}
          key={member.id}
        >
          <div
            className="executive-photo"
            style={{ backgroundImage: `url(${member.photo})` }}
          />

          <div className="executive-info">
            <span className="eyebrow">Executivo</span>
            <h2>{member.name}</h2>
            <p className="executive-role">Contador &amp; CEO</p>

            {member.about.map((paragraph, paragraphIndex) => (
              <p key={`about-${index}-${paragraphIndex}`}>{paragraph}</p>
            ))}

            <div className="executive-specialities">
              {member.specialities.map((speciality, specialityIndex) => (
                <span
                  className="speciality-chip"
                  key={`speciality-${index}-${specialityIndex}`}
                >
                  {speciality}
                </span>
              ))}
            </div>

            <div className="executive-contacts">
              <a
                className="btn btn-outline"
                href={getLinkedinLink(member.linkedin)}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <a
                className="btn btn-primary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiMessageCircle /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      );
    })}
  </div>
);

export default TeamPage;
