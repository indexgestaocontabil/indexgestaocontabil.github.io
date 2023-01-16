import './Footer.scss';
import {
  renderEmailActionLink,
  renderInstagramActionLink,
  renderWhatsAppActionLink,
} from '../../utils/utilitary-renders';
import { MEMBERS } from '../../globals';
import logo from '../../assets/img/logo-small-amarela.png';

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="Logotipo da Index Gestão Contábil" />
    <div className="footer-contacts">
      {renderInstagramActionLink()}
      {renderEmailActionLink()}
      {renderWhatsAppActionLink(MEMBERS.Rossan.phone, MEMBERS.Rossan.name)}
      {renderWhatsAppActionLink(MEMBERS.Thiago.phone, MEMBERS.Thiago.name)}
    </div>
  </footer>
);

export default Footer;
