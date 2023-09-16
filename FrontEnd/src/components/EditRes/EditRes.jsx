import Button from "@mui/material/Button";
import Input from "../Input/Input";
import axios from "axios";
import { useEffect } from "react";

const EditRes = (index) => {
  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  useEffect(() => {
    axios_main.get("/").then((res) => console.log(res.data));
  }, []);

  return (
    <>
      <h1>Edit Restaurant</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          required="true"
          label="Restaurant Name"
          variant="filled"
          id="filled-basic"
          changeHandler={(e) => nameChangeHandler(e)}
        />
        <Input
          required="true"
          label="Address"
          variant="filled"
          id="filled-basic"
          changeHandler={(e) => addressChangeHandler(e)}
        />
        <Input
          required="true"
          label="Email ID"
          variant="filled"
          id="filled-basic"
          changeHandler={(e) => emailChangeHandler(e)}
        />
        <Input
          required="true"
          label="Phone Number"
          variant="filled"
          id="filled-basic"
          changeHandler={(e) => phoneChangeHandler(e)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ mx: 2, my: 5 }}
          variant="contained"
          onClick={() => addRestaurantHandler()}
        >
          Save
        </Button>
        <Button
          sx={{ mx: 2, my: 5 }}
          variant="contained"
          onClick={() => addRestaurantHandler()}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
export default EditRes;
