import './Recipes.css';
import { IconLeaves } from '../../icons';
import { RecipeCard } from '../RecipeCard/RecipeCard.tsx';
import { mockedRecipes } from '../../__test__/__mocks__/recipes.mock.ts';

export const Recipes = () => {
  return (
    <>
      <section className="hero">
        <IconLeaves />
        <h1 className="page-title">Recipes</h1>
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
