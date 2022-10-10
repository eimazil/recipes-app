import { useContext, useEffect, useState } from "react";
import Meals from "./Meals";
import axios from "axios";
import Modal from "./Modal";
import MealsContext from "../Contexts/MealsContext";

function Main() {
  const [inputField, setInputField] = useState("");
  const [search, setSearch] = useState("");

  const { setRecipes } = useContext(MealsContext);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        setRecipes(res.data.meals);
      });
  }, [search, setRecipes]);

  const startSearch = () => {
    setSearch(inputField);
  };

  return (
    <div>
      <div className="search-container">
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
          <button onClick={startSearch} type="button" className="search-button">
            {" "}
            <svg className="search-img">
              <use xlinkHref="#svg-search"></use>
            </svg>
          </button>
        </div>
      </div>
      <Meals />
      <Modal />
    </div>
  );
}

export default Main;
