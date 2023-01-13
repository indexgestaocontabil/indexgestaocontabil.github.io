import { IconType } from '../../types';

import './ActionLink.scss';

type PropsType = {
  label: string;
  link: string;
  Icon?: IconType;
  size?: number;
};

function ActionLink({ Icon, label, link, size }: PropsType) {
  const fontSize = `${size || 14}px`;

  return (
    <div className="action-link">
      <a
        href={link}
        className="action-link-wrapper"
        target="_blank"
        rel="noreferrer"
      >
        {Icon && <Icon size={fontSize} className="action-link-icon" />}
        <span className="action-link-text" style={{ fontSize }}>
          {label}
        </span>
      </a>
    </div>
  );
}

export default ActionLink;
