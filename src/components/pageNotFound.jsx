import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <WarningAmberIcon style={{ color: "red", fontSize: "5em" }} />
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">Page Not Found!</Typography>
      <br />
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </Box>
  );
};
