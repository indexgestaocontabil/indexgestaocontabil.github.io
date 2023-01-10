import React from 'react';
import './BurgerMenu.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Ripples from 'react-ripples'

type PropsType = {
  children: React.ReactNode;
}

function BurgerMenu({ children }: PropsType) {
  console.log(children);
  return (
    <>
      <Ripples color='rgba(255, 255, 255, .3)' className='menu-trigger-ripple'>
        <button type="button" className="menu-trigger">
          <GiHamburgerMenu size={'24px'} className='menu-trigger-icon'/>
        </button>
      </Ripples>
    </>
  );
}

export default BurgerMenu;
