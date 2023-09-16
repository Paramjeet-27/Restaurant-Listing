import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes/routes.json";

const Nav = () => {
  const handleChange = (event, newValue) => {
    history.currentTab = newValue;
  };

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={history.currentTab ? history.currentTab : 0}
          onChange={handleChange}
          centered
        >
          <Tab label="View Listings" onClick={() => navigate(routes.HOME)} />
          <Tab
            label="Add New Restaurant"
            onClick={() => navigate(routes.ADD_NEW_RESTAURANT)}
          />
        </Tabs>
      </Box>
    </>
  );
};
export default Nav;
