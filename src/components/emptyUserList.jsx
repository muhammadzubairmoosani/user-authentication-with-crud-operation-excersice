import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

export const EmptyUserList = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // minHeight: "50vh",
        padding: "10rem 0",
      }}
    >
      <ListIcon style={{ color: "gray", fontSize: "5em" }} />
      <br />
      <Typography variant="h6">No Users Found!</Typography>
      <br />
      <Button onClick={onClick} variant="contained" startIcon={<AddIcon />}>
        Add User
      </Button>
    </Box>
  );
};
