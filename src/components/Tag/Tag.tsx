import { generateUUID } from '../../utils/utilitary-functions';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import './Tag.scss';

type PropsType = {
  text: string;
  tooltip?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

const Tag = ({
  text,
  color,
  className,
  backgroundColor,
  tooltip,
}: PropsType) => {
  backgroundColor = backgroundColor || `var(--theme-color-3)`;
  color = color || `var(--theme-color-4)`;

  const id = `tag-${generateUUID()}`;

  return (
    <>
      <div
        id={id}
        className={`tag ${className || ''} ${tooltip ? 'with-tooltip' : ''}`}
        style={{ backgroundColor, color }}
      >
        {text}
      </div>

      <Tooltip
        className="tooltip-class"
        classNameArrow="tooltip-class-arrow"
        place="bottom"
        anchorId={id}
        variant="info"
        content={tooltip}
      />
    </>
  );
};

export default Tag;
