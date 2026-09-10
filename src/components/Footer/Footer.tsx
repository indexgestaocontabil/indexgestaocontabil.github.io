import './Footer.scss';
import {
  renderEmailActionLink,
  renderInstagramActionLink,
  renderWhatsAppActionLink,
} from '../../utils/utilitary-renders';
import { ReactComponent as Logo } from '../../assets/img/logo-dourada.svg';

const Footer = () => (
  <footer className="footer">
    <Logo className="logo" />
    <div className="footer-contacts">
      {renderInstagramActionLink()}
      {renderEmailActionLink()}
      {renderWhatsAppActionLink('(71) 3599-7019')}
    </div>
  </footer>
);

export default Footer;
