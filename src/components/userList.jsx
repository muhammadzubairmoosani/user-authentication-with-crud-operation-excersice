import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Button, IconButton, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList } from "../services";
import { EmptyUserList } from "./emptyUserList";
import { LinearLoader } from "./loader";
import { Modal } from "./modal";

export const UserList = () => {
  const [modal, setModal] = useState(false);
  const [editUser, setEditUser] = useState({});
  const userListState = useSelector((state) => state.userListState);
  const dispatch = useDispatch();
  const { loading, error, list } = userListState;

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditUser(user);
    setModal(true);
  };

  const handleDelete = (userId) => dispatch(deleteUser(userId));

  // const handleSort = (field) => dispatch(toggleSortOrder(field));
  // handleSort("id")

  const getMessage = (message) => (
    <div className="message">
      <h4>{message}</h4>
    </div>
  );

  const getTableBody = () => {
    return list.map((user) => (
      <TableRow
        key={user.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <Avatar
            alt="Remy Sharp"
            src={user.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </TableCell>
        <TableCell>{user.id}</TableCell>
        <TableCell component="th" scope="row">
          {`${user.first_name} ${user.last_name}`}
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <IconButton
              onClick={() => handleEdit(user)}
              aria-label="edit"
              size="large"
              color="primary"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(user.id)}
              aria-label="delete"
              size="large"
              color="error"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>
    ));
  };

  if (loading) return <LinearLoader />;
  if (error) return getMessage(error);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        my={2}
      >
        <Button
          onClick={() => setModal(true)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add User
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        {!list?.length ? (
          <EmptyUserList onClick={() => setModal(true)} />
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Avatar", "ID", "Name", "Email", "Action"].map((title) => (
                  <TableCell
                    key={title}
                    align={title === "Action" ? "center" : "left"}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{getTableBody()}</TableBody>
          </Table>
        )}
        <Modal
          modal={modal}
          setModal={setModal}
          setEditUser={setEditUser}
          user={editUser}
        />
      </TableContainer>
    </>
  );
};
