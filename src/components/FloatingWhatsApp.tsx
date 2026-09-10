import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '../utils/utilitary-functions';
import './FloatingWhatsApp.scss';

const COMPANY_PHONE = '(71) 3599-7019';
const DEFAULT_MESSAGE = 'Olá, vim de seu site e preciso de um contador!';

const FloatingWhatsApp = () => {
  const link = `${getWhatsAppLink(
    COMPANY_PHONE.replace(/\(|\)|\s|-/g, '')
  )}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
