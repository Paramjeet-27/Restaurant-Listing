import TextField from "@mui/material/TextField";

const Input = ({ required, label, variant, id, changeHandler, value }) => {
  return (
    <>
      <TextField
        sx={{ mx: 40, my: 1 }}
        required={required}
        id={id}
        label={label}
        variant={variant}
        value={value}
        onChange={changeHandler}
      />
    </>
  );
};
export default Input;
