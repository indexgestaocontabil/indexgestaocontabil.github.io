import Title from '../../../components/Title/Title';
import './SolutionItem.scss';

type PropsType = {
  title: string;
  description: string;
  width?: string;
  widthUnit?: 'px' | '%' | 'vw';
};

const SolutionItem = ({ title, description, width, widthUnit }: PropsType) => {
  return (
    <div
      className="solution-item"
      style={{ width: `${width || 200}${widthUnit || 'px'}` }}
    >
      <Title
        additionalClassNames="solution-item-title"
        level={3}
        content={title}
        marginBottom={6}
      />

      <p className="solution-item-description">{description}</p>
    </div>
  );
};

export default SolutionItem;
