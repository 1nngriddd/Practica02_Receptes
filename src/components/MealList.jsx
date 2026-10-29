import MealCard from './MealCard';

function MealList({ meals }) {
  return (
    <div className="meals">
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
