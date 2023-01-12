import ActionLink from '../ActionLink/ActionLink';
import './Footer.scss';
import { MdEmail, MdPhone } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-contacts">
        <ActionLink 
          Icon={GrInstagram}
          label="/indexgestaocontabil"
          link="https://www.instagram.com/indexgestaocontabil/" />
          
        <ActionLink 
          Icon={MdEmail}
          label="indexcontabilidade@outlook.com"
          link="mailto:indexcontabilidade@outlook.com" />

        <ActionLink 
          Icon={MdPhone}
          label="(71) 98691-3116"
          link="tel:71986913116" />

        <ActionLink 
          Icon={MdPhone}
          label="(71) 98830-1015"
          link="tel:71988301015" />
      </div>
    </footer>
  )
}

export default Footer;
