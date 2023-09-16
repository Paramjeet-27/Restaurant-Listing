import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditRes from "../components/EditRes/EditRes";
import { useContext } from "react";
import { IndexContext } from "../contexts/indexContext";

const EditRestaurant = () => {
  const { index, newIndex } = useContext(IndexContext);
  // console.log(index);
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
      <EditRes indexValue={index} />
    </>
  );
};
export default EditRestaurant;
