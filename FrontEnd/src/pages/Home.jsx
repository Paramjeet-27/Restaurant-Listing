import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustList from "../components/CustList/CustList";
import Nav from "../components/Nav/Nav";

const Home = () => {
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
      <CustList />
    </>
  );
};

export default Home;
