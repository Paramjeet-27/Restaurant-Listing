import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const DishList = ({ indexValue }) => {
  console.log(indexValue);
  const [dishes, setDishes] = useState([
    "abcd",
    "efgh",
    "ijhk",
    "lmnop",
    "qrst",
    "uvw",
    "xyz",
    "dsfgdsf",
    "dfgrggs",
  ]);

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
      <h1>Dishes Available at : </h1>
      {dishesList}
    </>
  );
};
export default DishList;
