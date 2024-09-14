import { IconClose, IconMenu } from '../../icons';
import './Navigation.css';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation">
      <button
        className="icon-button navigation__button"
        type="button"
        aria-label="toggle menu"
        onClick={toggleMenu}
      >
        {!isMenuOpen && <IconMenu />}
        {isMenuOpen && <IconClose />}
      </button>
      <nav className="navigation__nav" hidden={!isMenuOpen}>
        <ul>
          <li>
            <a href="/123">Item 1</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
