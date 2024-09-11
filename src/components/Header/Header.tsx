import './Header.css';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
      </div>
    </header>
  );
};
