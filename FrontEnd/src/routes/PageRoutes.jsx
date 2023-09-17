import AddRestaurant from "../pages/AddRestaurant";
import Dishes from "../pages/Dishes";
import EditRestaurant from "../pages/EditRestaurant";
import Home from "../pages/Home";
import routes from "./routes.json";
import { Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.ADD_NEW_RESTAURANT} element={<AddRestaurant />} />
      <Route path={routes.EDIT_RESTAURANT} element={<EditRestaurant />} />
      <Route path={routes.DISHES} element={<Dishes />} />
    </Routes>
  );
};
export default PageRoutes;
