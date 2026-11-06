import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import MealList from '../components/MealList';

function Home() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
        );
        if (!response.ok) {
          throw new Error('Error carregant receptes.');
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getMeals();
  }, []);

  return (
    <div className="page">
      <h1>Llistat de Receptes</h1>
      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <MealList meals={meals} />}
    </div>
  );
}

export default Home;
