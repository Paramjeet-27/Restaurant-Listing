import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import axios from "axios";

const CustList = () => {
  // const array = [
  //   {
  //     res_name: "Akash",
  //     address: "SCO-45, Rank Road, Delhi",
  //     email: "akash@gmail.com",
  //     phone: 9874563221,
  //     isEditing: false,
  //   },
  //   {
  //     res_name: "Akash",
  //     address: "SCO-45, Rank Road, Delhi",
  //     email: "akash@gmail.com",
  //     phone: 9874563221,
  //     isEditing: false,
  //   },
  //   {
  //     res_name: "Akash",
  //     address: "SCO-45, Rank Road, Delhi",
  //     email: "akash@gmail.com",
  //     phone: 9874563221,
  //     isEditing: false,
  //   },
  //   {
  //     res_name: "Akash",
  //     address: "SCO-45, Rank Road, Delhi",
  //     email: "akash@gmail.com",
  //     phone: 9874563221,
  //     isEditing: false,
  //   },
  // ];

  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  const [resDetails, setResDetails] = useState([]);

  useEffect(() => {
    axios_main.get("/").then((res) => console.log(res.data));
  }, []);

  const editBtnHandler = (index) => {
    const listCopy = [...resDetails];
    listCopy[index].isEditing = true;
    setResDetails(listCopy);
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
                <Button sx={{ mx: 1 }} variant="contained">
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
    </>
  ));

  return <>{resList}</>;
};
export default CustList;
