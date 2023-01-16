import { GrInstagram, GrLinkedin } from 'react-icons/gr';
import { MdEmail, MdPhone } from 'react-icons/md';
import ActionLink, {
  ActionLinkColorStyle,
} from '../components/ActionLink/ActionLink';
import BoxLink from '../components/BoxLink/BoxLink';
import { ACCOUNTS } from '../globals';
import { IconType } from '../types';
import {
  getInstagramLink,
  getLinkedinLink,
  getWhatsAppLink,
} from './utilitary-functions';

type Options = {
  colorStyle?: ActionLinkColorStyle;
  size?: number;
  className?: string;
};

const renderActionLink = (
  icon: IconType,
  label: string,
  link: string,
  options?: Options
) => <ActionLink Icon={icon} label={label} link={link} {...(options || {})} />;

export function renderWhatsAppActionLink(
  phoneNumber: string,
  name?: string,
  options?: Options
) {
  const parsedPhoneNumber = phoneNumber.replace(/\(|\)|\s|-/g, '');
  const parsedName = name ? ` (${name})` : '';

  return renderActionLink(
    MdPhone,
    phoneNumber + parsedName,
    getWhatsAppLink(parsedPhoneNumber),
    options
  );
}

export function renderLinkedinActionLink(
  account: string,
  label: string,
  options?: Options
) {
  return renderActionLink(GrLinkedin, label, getLinkedinLink(account), options);
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
