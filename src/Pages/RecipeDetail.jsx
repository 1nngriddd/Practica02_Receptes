import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import InfoLine from '../components/InfoLine';
import IngredientList from '../components/IngredientList';

function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMeal() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
        );
        if (!response.ok) {
          throw new Error('Error carregant la recepta.');
        }
        const data = await response.json();
        if (!data.meals) {
          throw new Error('Recepta no trobada.');
        }
        setMeal(data.meals[0]);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getMeal();
  }, [id]);

  return (
    <div className="page">
      <Link to="/">← Tornar</Link>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <div className="detail">
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <InfoLine label="Origen" value={meal.strArea} />
          <InfoLine label="Categoria" value={meal.strCategory} />
          <h2>Ingredients</h2>
          <IngredientList meal={meal} />
          <h2>Instruccions</h2>
          <p className="instructions">{meal.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
