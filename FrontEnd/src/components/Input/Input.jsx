import TextField from "@mui/material/TextField";

const Input = ({ required, label, variant, id }) => {
  return (
    <>
      <TextField
        sx={{ mx: 40, my: 1 }}
        required={required}
        id={id}
        label={label}
        variant={variant}
      />
    </>
  );
};
export default Input;
