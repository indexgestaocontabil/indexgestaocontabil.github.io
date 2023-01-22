import './Tag.scss';

type PropsType = {
  text: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

const Tag = ({ text, color, className, backgroundColor }: PropsType) => {
  backgroundColor = backgroundColor || `var(--theme-color-3)`;
  color = color || `var(--theme-color-4)`;

  return (
    <div
      className={`tag ${className || ''}`}
      style={{ backgroundColor, color }}
    >
      {text}
    </div>
  );
};

export default Tag;
