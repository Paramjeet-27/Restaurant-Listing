import Button from "@mui/material/Button";
import Input from "../Input/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const EditRes = ({ indexValue }) => {
  const navigate = useNavigate();
  const [complete_data, setCompleteData] = useState();
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

  useEffect(() => {
    axios_main.get("").then((res) => {
      setCompleteData(res.data.data[indexValue]);
    });
  }, []);

  const saveBtnHandler = () => {
    axios_main.put(`/${complete_data.id}`, {
      res_name: `${resName}`,
      address: `${address}`,
      email: `${email}`,
      phone: `${phone}`,
    });
  };

  const cancelBtnHandler = () => {
    navigate(routes.HOME);
  };

  console.log(complete_data);

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
          variant="filled"
          id="filled-basic"
          value={complete_data.res_name}
          changeHandler={(e) => nameChangeHandler(e)}
        />
        <Input
          required="true"
          variant="filled"
          id="filled-basic"
          value={complete_data.address}
          changeHandler={(e) => addressChangeHandler(e)}
        />
        <Input
          required="true"
          variant="filled"
          id="filled-basic"
          value={complete_data.email}
          changeHandler={(e) => emailChangeHandler(e)}
        />
        <Input
          required="true"
          variant="filled"
          id="filled-basic"
          value={complete_data.phone}
          changeHandler={(e) => phoneChangeHandler(e)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ mx: 2, my: 5 }}
          variant="contained"
          onClick={() => saveBtnHandler()}
        >
          Save
        </Button>
        <Button
          sx={{ mx: 2, my: 5 }}
          variant="contained"
          onClick={() => cancelBtnHandler()}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};
export default EditRes;
