import { useContext } from "react";
import MealsContext from "../Contexts/MealsContext";

function Recipe({ recipe }) {
  const { setModalData, setFavRecipes, favRecipes } = useContext(MealsContext);

  const add = () => {
    let checkDuplicates = false;
    for (let r of favRecipes) {
      if (r.idMeal.includes(recipe.idMeal)) {
        checkDuplicates = true;
      }
    }
    if (checkDuplicates === false) {
      setFavRecipes([...favRecipes, recipe]);
    } else return;
  };

  return (
    <div className="single-recipe">
      <div className="small-title" onClick={(e) => setModalData(recipe)}>
        <h4 style={{ fontSize: recipe.strMeal.length > 60 ? "20px" : "24px" }}>
          {recipe.strMeal}
        </h4>
      </div>
      <img
        onClick={(e) => setModalData(recipe)}
        className="small-img"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <span
        // onClick={(e) => setFavRecipes([...favRecipes, recipe])}
        onClick={add}
        className="small-add-favourites"
      >
        Add to Favourites
      </span>
    </div>
  );
}

export default Recipe;
