import Title from '../../../components/Title/Title';
import { PARAMS } from '../../../globals';
import { IconType } from '../../../types';
import './FeaturedItem.scss';

type PropsType = {
  title: string;
  description: string;
  Icon: IconType | undefined;
};

const FeaturedItem = ({ title, description, Icon }: PropsType) => {
  return (
    <div className="featured-item">
      <div className="featured-item-icon">
        {Icon && <Icon size={PARAMS.VIEWPORT.IS_MOBILE ? 64 : 46} />}
      </div>
      <div className="featured-item-content">
        <Title
          level={3}
          subtitled={false}
          content={title}
          marginBottom={8}
          additionalClassNames="featured-item-content-title"
        />
        <p className="featured-item-content-description">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedItem;
