import { useContext } from "react";
import { AppContext } from "../context";

const Recipe = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      {contextValues.mealData.id && (
        <div className="recipe">
          <h2>{contextValues.mealData.name}</h2>
          <p>
            エリア<span>{contextValues.mealData.area}</span>
          </p>
          <p>
            カテゴリー<span>{contextValues.mealData.category}</span>
          </p>
          <img src={contextValues.mealData.img} alt="meal-image" />
          <p>{contextValues.mealData.instructions}</p>
          <p>
            ソース
            <span>
              <a href={contextValues.mealData.source}>
                {contextValues.mealData.source}
              </a>
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default Recipe;
