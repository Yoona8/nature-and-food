import './Landing.css';
import { IconLeaves } from '../../icons';

export const Landing = () => {
  return (
    <>
      <section className="hero">
        <IconLeaves />
        <h1 className="page-title">Amazing Vegan Lifestyle</h1>
        <p className="hero__description">The best lifestyle ever. Fresh, good, healthy vegetarian recipes.</p>
      </section>
      <section className="about">
        <h2 className="title-1">About</h2>
        <p>
          Raise your hand if you love falafel! I’ve gone back into the archives to highlight my all-time favorite
          homemade falafel recipe. Making falafel at home can be tricky...
        </p>
      </section>
    </>
  );
};
