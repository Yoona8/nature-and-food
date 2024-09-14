import { Logo, Navigation } from '..';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
