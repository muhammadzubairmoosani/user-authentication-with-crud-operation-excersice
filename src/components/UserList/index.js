import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList, toggleSortOrder } from "../../services";
import { EditModal } from "../EditModal";
import "./style.scss";

export const UserList = () => {
  const [modal, setModal] = useState(false);
  const [editUser, setEditUser] = useState({});
  const userState = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const { loading, error, list } = userState;

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditUser(user);
    setModal(true);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleSort = (field) => {
    dispatch(toggleSortOrder(field));
  };

  const getMessage = (message) => (
    <div className="message">
      <h4>{message}</h4>
    </div>
  );

  const getTableBody = () => {
    return list.map((user) => (
      <tr key={user.id}>
        <td>
          <img src={user.avatar} alt="avatar" />
        </td>
        <td>{user.id}</td>
        <td>{`${user.first_name} ${user.last_name}`}</td>
        <td>{user.email}</td>
        <td>
          <div className="button_group">
            <button className="edit_button" onClick={() => handleEdit(user)}>
              Edit
            </button>
            <button
              className="delete_button"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  if (loading) return getMessage("Data is Loading...");
  if (error) return getMessage(error);
  if (!list?.length) return getMessage("Users not found!");

  return (
    <div className="user_list">
      <button className="add_button" onClick={() => setModal(true)}>
        Add new user
      </button>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>
                <span>
                  ID
                  <button onClick={() => handleSort("id")}>↕</button>
                </span>
              </th>
              <th>
                <span>
                  Name
                  <button onClick={() => handleSort("name")}>↕</button>
                </span>
              </th>
              <th>
                <span>
                  Email
                  <button onClick={() => handleSort("email")}>↕</button>
                </span>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{getTableBody()}</tbody>
        </table>
      </div>
      {modal && (
        <EditModal
          setModal={setModal}
          setEditUser={setEditUser}
          user={editUser}
        />
      )}
    </div>
  );
};
