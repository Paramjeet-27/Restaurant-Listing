import Button from "@mui/material/Button";
import Input from "../Input/Input";

const Form = () => {
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
        />
        <Input
          required="true"
          label="Address"
          variant="filled"
          id="filled-basic"
        />
        <Input
          required="true"
          label="Email ID"
          variant="filled"
          id="filled-basic"
        />
        <Input
          required="true"
          label="Phone Number"
          variant="filled"
          id="filled-basic"
        />
      </div>
      <Button sx={{ mx: 50, my: 5 }} variant="contained">
        Add New Restaurant
      </Button>
    </>
  );
};
export default Form;
