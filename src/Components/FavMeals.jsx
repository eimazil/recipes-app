import RecipeFav from "./RecipeFav";

function FavMeals({ favRecipes }) {
  if (favRecipes === null) {
    return;
  }

  return (
    <div className="recipes-container">
      {favRecipes?.map((r) => (
        <RecipeFav key={r.idMeal} recipe={r} />
      ))}
    </div>
  );
}
export default FavMeals;
