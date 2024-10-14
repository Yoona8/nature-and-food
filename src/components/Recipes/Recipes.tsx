import { IconLeaves } from '../../icons';
import { RecipeCard } from '../RecipeCard/RecipeCard.tsx';
import { mockedRecipes } from '../../__test__/__mocks__/recipes.mock.ts';
import styles from './Recipes.module.css';
import globalStyles from '../../shared.module.css';

export const Recipes = () => {
  return (
    <>
      <section className={styles.hero}>
        <IconLeaves />
        <h1 className={globalStyles.pageTitle}>Recipes</h1>
      </section>
      <section className={styles.recipes}>
        <h2 className={globalStyles.visuallyHidden}>Featured recipes</h2>
        <ul className={styles.recipesCards}>
          {mockedRecipes.map(recipe => <li key={recipe.id}><RecipeCard {...recipe} /></li>)}
        </ul>
      </section>
    </>
  );
};
