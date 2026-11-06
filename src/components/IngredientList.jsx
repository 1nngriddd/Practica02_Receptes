function IngredientList({ meal }) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal['strIngredient' + i];
    const measure = meal['strMeasure' + i];
    if (name) {
      ingredients.push(measure + ' ' + name);
    }
  }

  return (
    <ul>
      {ingredients.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default IngredientList;
