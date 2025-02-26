import { useContext } from "react";
import { AppContext } from "../context";

const Form = () => {
  const contextValues = useContext(AppContext);
  return (
    <form onSubmit={contextValues.getMealData}>
      <input
        onChange={(e) => contextValues.setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
        value={contextValues.mealName}
      />
      <button>検索</button>
    </form>
  );
};

export default Form;
