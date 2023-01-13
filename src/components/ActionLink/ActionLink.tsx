import { IconType } from '../../types';

import './ActionLink.scss';

export enum ActionLinkColorStyle {
  WHITE = 'WHITE',
  BLUE = 'BLUE',
}

type PropsType = {
  label: string;
  link: string;
  Icon?: IconType;
  size?: number;
  colorStyle?: ActionLinkColorStyle;
};

function ActionLink({ Icon, label, link, size, colorStyle }: PropsType) {
  colorStyle = colorStyle || ActionLinkColorStyle.WHITE;
  const fontSize = `${size || 14}px`;

  return (
    <div className={`action-link action-link-${colorStyle?.toLowerCase()}`}>
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
