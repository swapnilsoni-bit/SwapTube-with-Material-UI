import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" 
    p={2} 
    sx={{ 
      position: "sticky", 
      background: "#000", 
      top: 0, 
      justifyContent: "space-between" 
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography 
        variant="h6" 
        sx={{ 
          marginLeft: 1, 
          fontWeight: "bold", 
          display: "flex",
          alignItems: "center"
        }}
      >
        <span style={{ color: "white" }}>Swap</span>
        <span style={{ color: "red" }}>Tube</span>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
