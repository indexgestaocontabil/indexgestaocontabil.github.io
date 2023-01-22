import { GrInstagram, GrLinkedin } from 'react-icons/gr';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
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

export const renderWhatsAppActionLink = (
  phoneNumber: string,
  name?: string,
  options?: Options
) => {
  const parsedPhoneNumber = phoneNumber.replace(/\(|\)|\s|-/g, '');
  const parsedName = name ? ` (${name})` : '';

  return renderActionLink(
    AiOutlineWhatsApp,
    phoneNumber + parsedName,
    getWhatsAppLink(parsedPhoneNumber),
    options
  );
};

export const renderLinkedinActionLink = (
  account: string,
  label: string,
  options?: Options
) => renderActionLink(GrLinkedin, label, getLinkedinLink(account), options);

export const renderEmailActionLink = (
  email = ACCOUNTS.email,
  options?: Options
) => renderActionLink(AiOutlineMail, email, `mailto:${email}`, options);

export const renderInstagramActionLink = (
  account = ACCOUNTS.instagram,
  options?: Options
) =>
  renderActionLink(
    GrInstagram,
    `/${account}`,
    getInstagramLink(account),
    options
  );

export const renderInstagramBoxLink = (account = ACCOUNTS.instagram) => {
  return (
    <BoxLink
      Icon={GrInstagram}
      label={account}
      link={getInstagramLink(account)}
    />
  );
};
