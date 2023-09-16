import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditRes from "../components/EditRes/EditRes";

const EditRestaurant = () => {
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
      <EditRes />
    </>
  );
};
export default EditRestaurant;
