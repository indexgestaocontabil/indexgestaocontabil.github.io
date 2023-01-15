import { IconType } from '../../types';
import './BoxLink.scss';

type PropsType = {
  Icon: IconType;
  label?: string;
  link: string;
};

function BoxLink({ Icon, label, link }: PropsType) {
  return (
    <a href={link} target={'_blank'} className="box-link" rel="noreferrer">
      <Icon className="box-link-icon" size={'32px'} />
      {label && <span className="box-link-text">{label}</span>}
    </a>
  );
}

export default BoxLink;
