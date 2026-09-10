import { Link } from 'react-router-dom';
import { FiCheck, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import Content from './content.json';
import { MEMBERS } from '../../globals';
import { getWhatsAppLink } from '../../utils/utilitary-functions';
import { getIconByName } from './icon-map';
import './HomePage.scss';

const HomePage = () => {
  const heroWhatsAppLink = getWhatsAppLink(
    MEMBERS.Rossan.phone.replace(/\(|\)|\s|-/g, '')
  );

  const renderHero = () => (
    <section className="home-hero">
      <div className="home-hero-badge">
        <span className="dot" />
        {Content.hero.badge}
      </div>

      <h1 className="home-hero-title">
        <span>{Content.hero.titleLine1}</span>
        <span className="highlight">{Content.hero.titleLine2}</span>
      </h1>

      <p className="home-hero-subtitle">{Content.hero.subtitle}</p>

      <div className="home-hero-actions">
        <Link to="/contato" className="btn btn-primary">
          {Content.hero.primaryCta} <FiArrowRight />
        </Link>
        <Link to="/servicos" className="btn btn-outline">
          {Content.hero.secondaryCta}
        </Link>
      </div>

      <div className="home-hero-stats">
        {Content.stats.map((stat, index) => (
          <div className="home-hero-stat" key={`stat-${index}`}>
            <span className="value">{stat.value}</span>
            <span className="label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const renderDiferenciais = () => (
    <section className="home-section home-diferenciais">
      <div className="home-section-heading">
        <span className="eyebrow">{Content.diferenciais.eyebrow}</span>
        <h2>{Content.diferenciais.title}</h2>
        <p>{Content.diferenciais.subtitle}</p>
      </div>

      <div className="home-diferenciais-grid">
        {Content.diferenciais.items.map((item, index) => {
          const Icon = getIconByName(item.icon);

          return (
            <div className="diferencial-card" key={`diferencial-${index}`}>
              <div className="icon-box">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );

  const renderServices = () => (
    <section className="home-section home-services" id="servicos">
      <div className="home-section-heading">
        <span className="eyebrow">{Content.services.eyebrow}</span>
        <h2>{Content.services.title}</h2>
        <p>{Content.services.subtitle}</p>
        <Link to="/servicos" className="home-section-link">
          Ver todos os serviços <FiArrowRight />
        </Link>
      </div>

      <div className="home-services-grid">
        {Content.services.items.map((service, index) => {
          const Icon = getIconByName(service.icon);

          return (
            <div className="service-card" key={`service-${index}`}>
              <div className="icon-box">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.bullets.map((bullet, bulletIndex) => (
                  <li key={`service-${index}-bullet-${bulletIndex}`}>
                    <FiCheck /> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );

  const renderCta = () => (
    <section className="home-cta">
      <h2>{Content.cta.title}</h2>
      <p>{Content.cta.subtitle}</p>
      <a
        className="btn btn-primary"
        href={`${heroWhatsAppLink}?text=${encodeURIComponent(
          Content.cta.whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        {Content.cta.buttonLabel}
      </a>
    </section>
  );

  const renderAbout = () => (
    <section className="home-section home-about" id="sobre">
      <div className="home-about-text">
        <span className="eyebrow">{Content.about.eyebrow}</span>
        <h2>{Content.about.title}</h2>

        {Content.about.paragraphs.map((paragraph, index) => (
          <p key={`about-paragraph-${index}`}>{paragraph}</p>
        ))}

        <div className="home-about-pillars">
          {Content.about.pillars.map((pillar, index) => {
            const Icon = getIconByName(pillar.icon);

            return (
              <div className="pillar" key={`pillar-${index}`}>
                <div className="icon-box">
                  <Icon />
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <Link className="btn btn-primary" to="/sobre">
          {Content.about.saibaMaisLabel}
        </Link>
      </div>

      <div className="home-about-card">
        <div className="home-about-card-stats">
          {Content.about.stats.map((stat, index) => (
            <div className="stat" key={`about-stat-${index}`}>
              <span className="value">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
        <p className="quote">&ldquo;{Content.about.quote}&rdquo;</p>
      </div>
    </section>
  );

  const renderTeam = () => (
    <section className="home-section home-team" id="equipe">
      <div className="home-section-heading">
        <span className="eyebrow">{Content.team.eyebrow}</span>
        <h2>{Content.team.title}</h2>
        <p>{Content.team.subtitle}</p>
      </div>

      <div className="home-team-grid">
        {Object.values(MEMBERS).map((member, index) => (
          <div className="team-card" key={`team-${index}`}>
            <div
              className="team-card-photo"
              style={{ backgroundImage: `url(${member.photo})` }}
            >
              <div className="team-card-photo-overlay">
                <span className="name">{member.name}</span>
                <span className="role">Contador</span>
              </div>
            </div>
            <div className="team-card-body">
              <p>{member.about[0]}</p>
              <a href={`tel:${member.phone.replace(/\(|\)|\s|-/g, '')}`}>
                <FiPhone /> {member.phone}
              </a>
              <a href={`mailto:${member.email}`}>
                <FiMail /> {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderClients = () => (
    <section className="home-section home-clients">
      <div className="home-section-heading">
        <span className="eyebrow">{Content.clients.eyebrow}</span>
        <h2>{Content.clients.title}</h2>
        <p>{Content.clients.subtitle}</p>
      </div>

      <div className="home-clients-grid">
        {Content.clients.logos.map((client, index) => (
          <div className="client-card" key={`client-${index}`}>
            <img src={client.file} alt={client.name} />
            <span className="name">{client.name}</span>
            <span className="segment">{client.segment}</span>
          </div>
        ))}
      </div>

      <p className="home-clients-footnote">{Content.clients.footerNote}</p>
    </section>
  );

  return (
    <div className="home">
      {renderHero()}
      {renderDiferenciais()}
      {renderServices()}
      {renderCta()}
      {renderAbout()}
      {renderTeam()}
      {renderClients()}
    </div>
  );
};

export default HomePage;
