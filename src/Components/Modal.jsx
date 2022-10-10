import { useContext } from "react";
import MealsContext from "../Contexts/MealsContext";

function Modal() {
  const { modalData, setModalData } = useContext(MealsContext);
  const measure = [];
  const products = [];
  const joinedArray = [];

  if (modalData === null) {
    return;
  }

  for (const property in modalData) {
    if (property.includes("strMeasure") && modalData[property].length > 1) {
      measure.push(modalData[property]);
    } else if (
      property.includes("strIngredient") &&
      modalData[property].length > 1
    ) {
      products.push(modalData[property]);
    }
  }

  for (let i = 0; i < measure.length; i++) {
    joinedArray.push({ measure: measure[i], product: products[i] });
  }

  return (
    <div className="modal-info-container">
      <div className="modal-info-content">
        <div className="x-container">
          <h3>{modalData.strMeal}</h3>
          <img
            className="modal-img"
            src={modalData.strMealThumb}
            alt={modalData.strMeal}
          />
          <div className="text-container">
            <div className="ingredients-list">
              <h4>Ingredients</h4>
              {joinedArray.map((r, i) => (
                <li className="ingredients-line" key={i}>
                  <span>{r.measure}</span>
                  <span>{r.product}</span>
                </li>
              ))}
            </div>
            <div className="modal-description-container">
              <h4>Instructions</h4>
              <p className="modal-description">{modalData.strInstructions}</p>
            </div>
          </div>
          <div onClick={(e) => setModalData(null)} className="btn-close"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
