import { ActionLinkColorStyle } from '../../../components/ActionLink/ActionLink';
import {
  renderLinkedinActionLink,
  renderWhatsAppActionLink,
} from '../../../utils/utilitary-renders';
import './Member.scss';

type PropsType = {
  name: string;
  phone: string;
  photo: string;
  linkedin: string;
  about: string[];
  specialities: string[];
};

const Member = ({
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
    <div className="member">
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
            <div
              key={name + index}
              className="member-info-specialities-item tag"
            >
              {specialityItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
