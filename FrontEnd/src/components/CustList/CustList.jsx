import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const CustList = () => {
  const array = [
    {
      res_name: "Akash",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEdditing: false,
      edditing_res_name: "Akash",
      edditing_address: "dxfgdfdhhfghdfg",
      edditing_contact: "dfgdg gydfg dghdfh ",
    },
  ];
  const [resDetails, setResDetails] = useState(array);
  const resList = resDetails.map((ele, index) => (
    <>
      <List key={index}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primary={ele.res_name}
              secondary={`${ele.address}, ${ele.contact}`}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  ));

  return <>{resList}</>;
};
export default CustList;
