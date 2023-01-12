import './Footer.scss';
import { renderEmail, renderInstagram, renderWhatsApp } from '../../utils/utilitary-renders';
import { MEMBERS } from '../../globals';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-contacts">
        {renderInstagram()}
        {renderEmail()}
        {renderWhatsApp(MEMBERS.Rossan.phone, MEMBERS.Rossan.name)}
        {renderWhatsApp(MEMBERS.Thiago.phone, MEMBERS.Thiago.name)}
      </div>
    </footer>
  )
}

export default Footer;
