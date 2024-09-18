import './Landing.css';
import { IconLeaves } from '../../icons';

export const Landing = () => {
  return (
    <>
      <section className="hero">
        <IconLeaves />
        <h1 className="page-title hero__title">Amazing Vegan Lifestyle</h1>
        <p className="hero__description">The best lifestyle ever. Fresh, good, healthy vegetarian recipes.</p>
      </section>
    </>
  );
};
