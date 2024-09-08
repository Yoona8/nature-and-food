import { Header } from '../Header';
import { Footer } from '../Footer/Footer.tsx';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
