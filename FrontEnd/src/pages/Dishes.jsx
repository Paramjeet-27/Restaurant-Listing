import { useContext } from "react";
import DishList from "../DishList/DishList";
import { IndexContext } from "../contexts/indexContext";

const Dishes = () => {
  const { index, newIndex } = useContext(IndexContext);
  return (
    <>
      <DishList indexValue={index} />
    </>
  );
};
export default Dishes;
