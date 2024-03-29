import { ActionLinkColorStyle } from '../../../components/ActionLink/ActionLink';
import Tag from '../../../components/Tag/Tag';
import {
  renderLinkedinActionLink,
  renderWhatsAppActionLink,
} from '../../../utils/utilitary-renders';
import './Member.scss';

type PropsType = {
  id: string;
  name: string;
  phone: string;
  photo: string;
  linkedin: string;
  about: string[];
  specialities: string[];
};

const Member = ({
  id,
  name,
  phone,
  photo,
  about,
  specialities,
  linkedin,
}: PropsType) => {
  const actionLinkOptions = {
    colorStyle: ActionLinkColorStyle.BLUE,
    className: 'member-info-contact-item',
    size: 18,
  };

  return (
    <div className="member" id={id}>
      <div
        className="member-photo"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="member-info">
        <div className="member-info-name">{name}</div>
        <div className="member-info-about">
          {about.map((aboutItem, index) => (
            <p key={name + index} className="member-info-about-item">
              {aboutItem}
            </p>
          ))}
        </div>
        <div className="member-info-contact">
          {renderLinkedinActionLink(
            linkedin,
            `/in/${linkedin}`,
            actionLinkOptions
          )}
          {renderWhatsAppActionLink(phone, undefined, actionLinkOptions)}
        </div>
        <div className="member-info-specialities">
          {specialities.map((specialityItem, index) => (
            <Tag
              key={name + index}
              className="member-info-specialities-item"
              text={specialityItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
