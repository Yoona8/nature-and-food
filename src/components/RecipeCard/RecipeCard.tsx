import { IRecipe } from '../../models/recipe.ts';
import './RecipeCard.css';

interface RecipeCardProps extends IRecipe {
  className: string;
}

export const RecipeCard = ({
  title,
  description,
  imgUrl,
  className = '',
  ...props
}: RecipeCardProps) => {
  return (
    <article className={`${className} recipe`} {...props}>
      <img className="recipe__img" src={imgUrl} alt={title} width={300} />
      <div className="recipe__content-wrapper">
        <h1 className="title-1">{title}</h1>
        <p>{description}</p>
      </div>
    </article>
  );
};
