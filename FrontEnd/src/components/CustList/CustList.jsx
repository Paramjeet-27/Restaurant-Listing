import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const CustList = () => {
  const [resDetails, setResDetails] = useState(["a", "b", "c", "d"]);
  const resList = resDetails.map((ele, index) => (
    <>
      <List key={index}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={ele} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  ));

  return <>{resList}</>;
};
export default CustList;
