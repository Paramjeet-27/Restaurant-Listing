import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import axios from "axios";

const CustList = () => {
  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    axios_main.get("").then((res) => setResDetails(res.data.data));
  }, [resDetails]);

  const editBtnHandler = (index) => {
    const listCopy = [...resDetails];
    listCopy[index].isEditing = true;
    setResDetails(listCopy);
  };
  const cancelBtnHandler = (index) => {
    const listCopy = [...resDetails];
    listCopy[index].isEditing = false;
    setResDetails(listCopy);
  };

  const deleteBtnHandler = (index) => {
    axios_main.delete(`/${resDetails[index].id}`);
  };

  const resList = resDetails.map((ele, index) => (
    <List key={index} sx={{ mx: 10 }}>
      <ListItem disablePadding>
        <ListItemButton>
          {!ele.isEditing && (
            <>
              <ListItemText
                primary={ele.res_name}
                secondary={`${ele.email} | ${ele.phone}`}
              />
              <ListItemText secondary={ele.address} />
              <Button
                sx={{ mx: 1 }}
                variant="contained"
                onClick={() => {
                  editBtnHandler(index);
                }}
              >
                Edit
              </Button>
            </>
          )}
          {ele.isEditing && (
            <>
              <ListItemText
                primary={ele.res_name}
                secondary={`${ele.email} | ${ele.phone}`}
              />
              <ListItemText secondary={ele.address} />
              <Button sx={{ mx: 1 }} variant="contained">
                Save
              </Button>
              <Button
                sx={{ mx: 1 }}
                variant="contained"
                onClick={() => {
                  cancelBtnHandler(index);
                }}
              >
                Cancel
              </Button>
            </>
          )}
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
  ));

  return <>{resList}</>;
};
export default CustList;
