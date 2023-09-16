import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";
import { IndexContext } from "../../contexts/indexContext";

const CustList = () => {
  const navigate = useNavigate();

  const { index, newIndex } = useContext(IndexContext);

  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    axios_main.get("").then((res) => {
      setResDetails(res.data.data);
    });
  }, [resDetails]);

  const editBtnHandler = (index) => {
    newIndex(index);
    navigate(routes.EDIT_RESTAURANT);
  };

  const deleteBtnHandler = (index) => {
    axios_main.delete(`/${resDetails[index].id}`);
  };

  const resList = resDetails.map((ele, index) => (
    <List key={index} sx={{ mx: 10 }}>
      <ListItem disablePadding>
        <ListItemButton>
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
