import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import FavMeals from "./Components/FavMeals";
import MealsContext from "../src/Contexts/MealsContext";

function App() {
  const [modalData, setModalData] = useState(null);
  const [favRecipes, setFavRecipes] = useState(null);
  const [recipes, setRecipes] = useState(null);

  if (favRecipes === null) {
    const a = localStorage.getItem("favRecipes");
    if (a === null) {
      setFavRecipes([]);
    } else setFavRecipes(JSON.parse(a));
  } else localStorage.setItem("favRecipes", JSON.stringify(favRecipes));

  return (
    <MealsContext.Provider
      value={{
        recipes,
        modalData,
        setModalData,
        setFavRecipes,
        favRecipes,
        setRecipes,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>
              <Route
                path="/"
                element={
                  <Main setFavRecipes={setFavRecipes} favRecipes={favRecipes} />
                }
              ></Route>
              <Route
                path="/favourites"
                element={<FavMeals favRecipes={favRecipes} />}
              ></Route>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </MealsContext.Provider>
  );
}

export default App;
