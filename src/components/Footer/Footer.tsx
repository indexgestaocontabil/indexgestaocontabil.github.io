import './Footer.scss';
import {
  renderEmailActionLink,
  renderInstagramActionLink,
  renderWhatsAppActionLink,
  renderAddressActionLink,
} from '../../utils/utilitary-renders';
import { ReactComponent as Logo } from '../../assets/img/logo-dourada.svg';

const ADDRESS =
  'Hangar Business Park Torre 01 - Sala 313, Av. Luís Viana Filho - São Cristóvão, Salvador - BA, 41500-300';

const Footer = () => (
  <footer className="footer">
    <Logo className="logo" />
    <div className="footer-contacts">
      {renderInstagramActionLink()}
      {renderEmailActionLink()}
      {renderWhatsAppActionLink('(71) 3599-7019')}
      {renderAddressActionLink(ADDRESS, { className: 'footer-address' })}
    </div>
  </footer>
);

export default Footer;
