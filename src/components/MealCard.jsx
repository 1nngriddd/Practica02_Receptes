import InfoLine from './InfoLine';

function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <InfoLine label="Categoria" value={meal.strCategory} />
      <InfoLine label="Origen" value={meal.strArea} />
    </div>
  );
}

export default MealCard;
