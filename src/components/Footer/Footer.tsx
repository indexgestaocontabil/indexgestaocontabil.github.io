import './Footer.scss';
import {
  renderEmailActionLink,
  renderInstagramActionLink,
  renderWhatsAppActionLink,
} from '../../utils/utilitary-renders';
import { MEMBERS } from '../../globals';
import { ReactComponent as Logo } from '../../assets/img/logo-dourada.svg';

const Footer = () => (
  <footer className="footer">
    <Logo className="logo" />
    <div className="footer-contacts">
      {renderInstagramActionLink()}
      {renderEmailActionLink()}
      {renderWhatsAppActionLink(MEMBERS.Rossan.phone, MEMBERS.Rossan.name)}
      {renderWhatsAppActionLink(MEMBERS.Thiago.phone, MEMBERS.Thiago.name)}
    </div>
  </footer>
);

export default Footer;
