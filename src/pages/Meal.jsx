import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/Loading";
import Recipe from "../components/Recipe";

const Meal = () => {
  const contextValues = useContext(AppContext);
  return <>{contextValues.loading ? <Loading /> : <Recipe />}</>;
};

export default Meal;
