import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form";

const AddRestaurant = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", m: 1 }}
        >
          Restaurant Listing
        </Typography>
      </Box>
      <Nav />
      <Form />
    </>
  );
};
export default AddRestaurant;
