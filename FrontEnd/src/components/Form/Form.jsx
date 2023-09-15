import Button from "@mui/material/Button";
import Input from "../Input/Input";
import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [resName, setResName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const nameChangeHandler = (e) => {
    setResName(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const axios_main = axios.create({
    baseURL: "http://localhost:8888/",
  });

  const addRestaurantHandler = () => {
    axios_main.post("/", {
      res_name: `${resName}`,
      address: `${address}`,
      email: `${email}`,
      phone: `${phone}`,
    });
  };

  return (
    <>
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
      <Button
        sx={{ mx: 50, my: 5 }}
        variant="contained"
        onClick={() => addRestaurantHandler()}
      >
        Add New Restaurant
      </Button>
    </>
  );
};
export default Form;
