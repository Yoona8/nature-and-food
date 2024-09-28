import './Landing.css';
import { IconLeaves } from '../../icons';
import { RecipeCard } from '../RecipeCard/RecipeCard.tsx';
import { mockedRecipes } from '../../__test__/__mocks__/recipes.mock.ts';

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
      <section className="recipes">
        <h2 className="visually-hidden">Featured recipes</h2>
        <ul className="recipes__cards">
          {mockedRecipes.map(recipe => <li key={recipe.id}><RecipeCard {...recipe} /></li>)}
        </ul>
      </section>
    </>
  );
};
