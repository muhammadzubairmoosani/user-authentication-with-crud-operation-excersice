import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import userAvatar from "../assets/user_avatar.png";
import { addUser, updateUser } from "../services";

export const Modal = ({ modal, setModal, setEditUser, user }) => {
  const userList = useSelector((state) => state.userListState.list);
  const dispatch = useDispatch();
  const isEditMode = Object.keys(user).length;

  const handleCloseModal = () => {
    setModal(false);
    setEditUser({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const first_name = data.get("first_name");
    const last_name = data.get("last_name");
    const email = data.get("email");

    const _user = { first_name, last_name, email };
    dispatch(
      isEditMode
        ? updateUser({ ...user, ..._user })
        : addUser({ ..._user, id: 1 + userList.length, avatar: userAvatar })
    );
    handleCloseModal();
  };

  return (
    <Dialog open={modal} onClose={handleCloseModal}>
      <DialogTitle>{`${isEditMode ? "Edit" : "Add"} User`}</DialogTitle>

      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            id="first_name"
            name="first_name"
            label="First Name"
            variant="outlined"
            required
            autoFocus
            fullWidth
            defaultValue={user.first_name}
          />
          <TextField
            id="last_name"
            name="last_name"
            label="Last Name"
            variant="outlined"
            required
            fullWidth
            defaultValue={user.last_name}
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            required
            fullWidth
            defaultValue={user.email}
          />
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" type="submit">
              {isEditMode ? "Edit" : "Add"}
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
