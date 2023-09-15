import { Button } from "@mui/material";
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
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
    {
      res_name: "Deepak",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
    {
      res_name: "Tarun",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
    {
      res_name: "Gopi",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
    {
      res_name: "Arjun",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
    {
      res_name: "Raghav",
      address: "dxfgdfdhhfghdfg",
      contact: "dfgdg gydfg dghdfh ",
      isEditing: false,
      editing_res_name: "Akash",
      editing_address: "dxfgdfdhhfghdfg",
      editing_contact: "dfgdg gydfg dghdfh ",
    },
  ];

  // const [resName, setResName] = useState();
  // const [resAddress, setResAddress] = useState();
  // const [resEmail, setResEmail] = useState();
  // const [resPhone, setResPhone] = useState();
  const [resDetails, setResDetails] = useState(array);

  const editBtnHandler = (index) => {
    const listCopy = [...resDetails];
    listCopy[index].isEditing = true;
    setTask(listCopy);
  };

  const deleteBtnHandler = (index) => {
    const listCopy = [...resDetails];
    listCopy.splice(index, 1);
    setResDetails(listCopy);
  };

  const resList = resDetails.map((ele, index) => (
    <>
      <List key={index} sx={{ mx: 10 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={ele.res_name} secondary={ele.contact} />
            <ListItemText secondary={ele.address} />
            <Button sx={{ mx: 1 }} variant="contained">
              Edit
            </Button>
            <Button
              sx={{ mx: 1 }}
              variant="contained"
              onClick={() => {
                deleteBtnHandler(index);
              }}
            >
              Delete
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  ));

  return <>{resList}</>;
};
export default CustList;
