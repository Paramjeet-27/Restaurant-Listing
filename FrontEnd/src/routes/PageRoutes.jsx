import AddRestaurant from "../pages/AddRestaurant";
import Home from "../pages/Home";
import routes from "./routes.json";
import { Route, Routes } from "react-router-dom";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.ADD_NEW_RESTAURANT} element={<AddRestaurant />} />
    </Routes>
  );
};
export default PageRoutes;
