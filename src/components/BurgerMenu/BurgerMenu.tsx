/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import './BurgerMenu.scss';
import { MdMenu, MdClose } from 'react-icons/md';
import Ripples from 'react-ripples';
import useToggle from '../../hooks/use-toggle';
import { useLocation } from 'react-router-dom';

type PropsType = {
  children: React.ReactNode;
};

type ValidIconType = typeof MdMenu;

function BurgerMenu({ children }: PropsType) {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const location = useLocation();

  useEffect(() => {
    toggleMenu(false);
  }, [location, toggleMenu]);

  function renderButton(Icon: ValidIconType, callback: () => void) {
    return (
      <Ripples
        color="rgba(255, 255, 255, .3)"
        className="menu-mobile-trigger-ripple menu-mobile-opener"
      >
        <button
          type="button"
          className="menu-mobile-trigger"
          onClick={callback}
        >
          <Icon size={'24px'} className="menu-mobile-trigger-icon" />
        </button>
      </Ripples>
    );
  }

  return (
    <div className="menu-mobile">
      {renderButton(MdMenu, () => toggleMenu(true))}

      {isMenuOpen && (
        <div className="menu-mobile-opened-container">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className="menu-mobile-opened-overlay"
            onClick={() => toggleMenu(false)}
          />
          <div className="menu-mobile-opened-content">
            {renderButton(MdClose, () => toggleMenu(false))}
            <div className="menu-mobile-opened-content-links">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
