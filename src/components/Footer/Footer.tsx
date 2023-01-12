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
          label="(71) 98739-0348"
          link="https://wa.me/71987390348" />

        <ActionLink 
          Icon={MdPhone}
          label="(71) 99273-8464"
          link="https://wa.me/71992738464" />
      </div>
    </footer>
  )
}

export default Footer;
