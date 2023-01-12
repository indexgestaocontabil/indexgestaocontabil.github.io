import { IconType } from '../../types';

import './ActionLink.scss';

type PropsType = {
  Icon?: IconType;
  label: string;
  link: string;
};

function ActionLink({Icon, label, link}: PropsType) {
  return (
    <div className="action-link">
      <a href={link} className="action-link-text" target="_blank" rel="noreferrer">
        {Icon && <Icon size={'20px'} className='action-link-icon'/>}
        {label}
      </a>
    </div>
  )
}

export default ActionLink;
