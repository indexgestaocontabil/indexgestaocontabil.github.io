import './Footer.scss';
import {
  renderEmail,
  renderInstagram,
  renderWhatsApp,
} from '../../utils/utilitary-renders';
import { MEMBERS } from '../../globals';
import logo from '../../assets/img/logo-small-amarela.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logotipo da Index Gestão Contábil" />
      <div className="footer-contacts">
        {renderInstagram()}
        {renderEmail()}
        {renderWhatsApp(MEMBERS.Rossan.phone, MEMBERS.Rossan.name)}
        {renderWhatsApp(MEMBERS.Thiago.phone, MEMBERS.Thiago.name)}
      </div>
    </footer>
  );
}

export default Footer;
