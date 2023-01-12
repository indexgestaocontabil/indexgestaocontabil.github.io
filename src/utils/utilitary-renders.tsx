import { GrInstagram } from "react-icons/gr";
import { MdEmail, MdPhone } from "react-icons/md";
import ActionLink from "../components/ActionLink/ActionLink";
import { ACCOUNTS } from "../globals";

export function renderWhatsApp(phoneNumber: string, name?: string) {
  const parsedPhoneNumber = phoneNumber.replace(/\(|\)|\s|-/g, '');
  const parsedName = name ? ` (${name})` : '';

  return (
    <ActionLink 
      Icon={MdPhone}
      label={phoneNumber + parsedName}
      link={`https://wa.me/${parsedPhoneNumber}`} />
  )
}

export function renderEmail(email = ACCOUNTS.email) {
  return (
    <ActionLink 
      Icon={MdEmail}
      label={email}
      link={`mailto:${email}`} />
  )
}

export function renderInstagram(account = ACCOUNTS.instagram) {
  return (
    <ActionLink 
      Icon={GrInstagram}
      label={`/${account}`}
      link={`https://www.instagram.com/${account}/`} />
  )
}
