import { ActionLinkColorStyle } from '../../../components/ActionLink/ActionLink';
import { renderWhatsAppActionLink } from '../../../utils/utilitary-renders';
import './Member.scss';

type PropsType = {
  name: string;
  phone: string;
  photo: string;
  about: string[];
  specialities: string[];
};

function Member({ name, phone, photo, about, specialities }: PropsType) {
  return (
    <div className="member">
      <div
        className="member-photo"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <div className="member-info">
        <div className="member-name">{name}</div>
        <div className="member-phone">
          {renderWhatsAppActionLink(
            phone,
            undefined,
            ActionLinkColorStyle.BLUE
          )}
        </div>
        <div className="member-about">
          {about.map((aboutItem, index) => (
            <p key={name + index} className="member-about-item">
              {aboutItem}
            </p>
          ))}
        </div>
        <div className="member-specialities">
          {specialities.map((specialityItem, index) => (
            <div key={name + index} className="member-specialities-item tag">
              {specialityItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Member;
