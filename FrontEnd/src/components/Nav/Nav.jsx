import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

const Nav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="View Listings" />
          <Tab label="Add New Restaurant" />
        </Tabs>
      </Box>
    </>
  );
};
export default Nav;
