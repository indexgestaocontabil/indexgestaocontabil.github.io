import ActionLink from '../ActionLink/ActionLink';
import './Footer.scss';
import { MdClose } from 'react-icons/md';

function Footer() {
  return (
    <footer className='footer'>
      <ActionLink 
        Icon={MdClose}
        label="Hugo Deiró"
        link="https://hugodeiro.com" />
    </footer>
  )
}

export default Footer;
