import { useContext } from "react";
import MealsContext from "../Contexts/MealsContext";

function RecipeFav({ recipe }) {
  const { setModalData, setFavRecipes, favRecipes } = useContext(MealsContext);

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
        onClick={(e) =>
          setFavRecipes(
            [...favRecipes].filter((r) => r.idMeal !== recipe.idMeal)
          )
        }
        className="small-add-favourites"
      >
        Remove from Favourites
      </span>
    </div>
  );
}

export default RecipeFav;
