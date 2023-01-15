import { GrInstagram } from 'react-icons/gr';
import { MdEmail, MdPhone } from 'react-icons/md';
import ActionLink, {
  ActionLinkColorStyle,
} from '../components/ActionLink/ActionLink';
import BoxLink from '../components/BoxLink/BoxLink';
import { ACCOUNTS } from '../globals';
import { getInstagramLink, getWhatsAppLink } from './utilitary-functions';

export function renderWhatsAppActionLink(
  phoneNumber: string,
  name?: string,
  colorStyle?: ActionLinkColorStyle
) {
  const parsedPhoneNumber = phoneNumber.replace(/\(|\)|\s|-/g, '');
  const parsedName = name ? ` (${name})` : '';

  return (
    <ActionLink
      Icon={MdPhone}
      label={phoneNumber + parsedName}
      link={getWhatsAppLink(parsedPhoneNumber)}
      colorStyle={colorStyle}
    />
  );
}

export function renderEmailActionLink(email = ACCOUNTS.email) {
  return <ActionLink Icon={MdEmail} label={email} link={`mailto:${email}`} />;
}

export function renderInstagramActionLink(
  account = ACCOUNTS.instagram,
  colorStyle?: ActionLinkColorStyle
) {
  return (
    <ActionLink
      Icon={GrInstagram}
      label={`/${account}`}
      link={getInstagramLink(account)}
      colorStyle={colorStyle}
    />
  );
}

export function renderInstagramBoxLink(account = ACCOUNTS.instagram) {
  return (
    <BoxLink
      Icon={GrInstagram}
      label={account}
      link={getInstagramLink(account)}
    />
  );
}
