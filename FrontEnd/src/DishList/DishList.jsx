import List from "@mui/material/List";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../routes/routes.json";

const DishList = ({ indexValue }) => {
  const navigate = useNavigate();
  console.log(indexValue);
  const [dishes, setDishes] = useState([]);
  const [resName, setResName] = useState("");

  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  const fetcher = () => {
    axios_main.get("").then((res) => {
      setResName(res.data.data[indexValue].res_name);
      setDishes(JSON.parse(res.data.data[indexValue].dishes));
    });
  };

  useEffect(() => {
    fetcher();
  }, []);

  const backBtnHandler = () => {
    navigate(routes.HOME);
  };

  const dishesList = dishes.map((ele, index) => (
    <List key={index} sx={{ mx: 10 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={ele} />
        </ListItemButton>
      </ListItem>
    </List>
  ));

  return (
    <>
      <h1>Dishes Available at : {resName}</h1>
      {dishesList}
      <Button
        sx={{ mx: 1 }}
        variant="contained"
        onClick={() => {
          backBtnHandler();
        }}
      >
        Back To Resaurant List
      </Button>
    </>
  );
};
export default DishList;
