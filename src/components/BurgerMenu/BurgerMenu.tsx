/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect } from 'react';
import './BurgerMenu.scss';
import { MdMenu, MdClose } from 'react-icons/md';
import Ripples from 'react-ripples';
import useToggle from '../../hooks/use-toggle';
import { useLocation } from 'react-router-dom';
import { PARAMS } from '../../globals';

type PropsType = {
  children: React.ReactNode;
};

type ValidIconType = typeof MdMenu;

const BurgerMenu = ({ children }: PropsType) => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const location = useLocation();

  const changeMenuState = useCallback(
    (state: boolean) => {
      document.body.classList[state ? 'add' : 'remove']('no-scroll');
      toggleMenu(state);
    },
    [toggleMenu]
  );

  useEffect(() => {
    changeMenuState(false);
  }, [location, changeMenuState]);

  const renderButton = (Icon: ValidIconType, callback: () => void) => (
    <Ripples
      color={PARAMS.RIPPLES_COLOR}
      className="menu-mobile-trigger-ripple menu-mobile-opener"
    >
      <button type="button" className="menu-mobile-trigger" onClick={callback}>
        <Icon size={'24px'} className="menu-mobile-trigger-icon" />
      </button>
    </Ripples>
  );

  return (
    <div className="menu-mobile">
      {renderButton(MdMenu, () => changeMenuState(true))}

      {isMenuOpen && (
        <div className="menu-mobile-opened-container">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div
            className="menu-mobile-opened-overlay"
            onClick={() => changeMenuState(false)}
          />
          <div className="menu-mobile-opened-content">
            {renderButton(MdClose, () => changeMenuState(false))}
            <div className="menu-mobile-opened-content-links">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
