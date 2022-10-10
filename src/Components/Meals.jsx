import { useContext } from "react";
import MealsContext from "../Contexts/MealsContext";
import Recipe from "./Recipe";

function Meals() {
  const { recipes } = useContext(MealsContext);

  if (recipes === null) {
    return;
  }

  return (
    <div className="recipes-container">
      {recipes?.map((r) => (
        <Recipe key={r.idMeal} recipe={r} />
      ))}
    </div>
  );
}
export default Meals;
