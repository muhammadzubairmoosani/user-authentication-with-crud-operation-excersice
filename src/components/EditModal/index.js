import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../services";
import "./style.scss";
import userAvatar from "../../assets/user_avatar.png";

export const EditModal = ({ setModal, setEditUser, user }) => {
  const userList = useSelector((state) => state.userState.list);

  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    id: 1 + userList.length,
    avatar: userAvatar,
    first_name: "",
    last_name: "",
    email: "",
  });
  const isEditMode = Object.keys(user).length;
  const handleCloseModal = () => {
    setModal(false);
    setNewUser({});
    setEditUser({});
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    isEditMode ? dispatch(updateUser(user)) : dispatch(addUser(newUser));
    handleCloseModal();
  };

  const handleOnChange = (key, value) => {
    if (isEditMode) {
      setEditUser({ ...user, [key]: value });
    } else {
      setNewUser({ ...newUser, [key]: value });
    }
  };

  return (
    <div className="edit_modal_container">
      <div className="nested_container">
        <form onSubmit={handleOnSubmit} className="content_wrapper">
          <div className="cross_icon_continer">
            <h3>{`${isEditMode ? "Edit" : "Add"} User`}</h3>
            <button className="cross_icon" onClick={handleCloseModal} />
          </div>
          <label>
            First Name:
            <input
              type="text"
              required
              value={user.first_name || newUser.first_name}
              onChange={(e) => handleOnChange("first_name", e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              required
              value={user.last_name || newUser.last_name}
              onChange={(e) => handleOnChange("last_name", e.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              required
              value={user.email || newUser.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
            />
          </label>
          <button type="submit">{isEditMode ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};
