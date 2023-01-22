/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { AiOutlineCaretDown } from 'react-icons/ai';
import useToggle from '../../hooks/use-toggle';
import './Folder.scss';

type PropsType = {
  openTitle: string;
  closeTitle: string;
  startOpen?: boolean;
  children?: JSX.Element | string;
};

const Folder = ({ openTitle, closeTitle, children, startOpen }: PropsType) => {
  const [isOpen, toggle] = useToggle(startOpen);

  return (
    <div className={`folder folder-is-${isOpen ? 'open' : 'closed'}`}>
      <div className="folder-header" onClick={() => toggle()}>
        {isOpen ? closeTitle : openTitle}

        <AiOutlineCaretDown className="folder-header-icon" />
      </div>

      {isOpen && <div className="folder-content">{children}</div>}
    </div>
  );
};

export default Folder;
