import { Link } from 'react-router-dom';
import InfoLine from './InfoLine';

function MealCard({ meal }) {
  return (
    <Link to={'/recipe/' + meal.idMeal} className="meal-link">
      <div className="meal-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h2>{meal.strMeal}</h2>
        <InfoLine label="Categoria" value={meal.strCategory} />
        <InfoLine label="Origen" value={meal.strArea} />
      </div>
    </Link>
  );
}

export default MealCard;
