import React from "react";
import Chance from "chance";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  deleteAllUsers,
} from "../store/slices/users.slice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const createAUser = () => {
    const chance = new Chance();

    const id = chance.guid();
    const gender = chance.gender();
    const name = chance.name({ gender: gender });
    const age = chance.age();

    return {
      id,
      name,
      age,
      gender,
    };
  };

  const handleAddUser = () => {
    const user = createAUser();

    dispatch(addUser(user));
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleDeleteAllUsers = () => {
    dispatch(deleteAllUsers());
  };

  return (
    <div className="w-full space-y-3">
      <div className="border-b border-black"> </div>

      {/* Add User */}
      <div className="w-full flex items-center justify-between space-x-2">
        <div className="font-Poppins text-xl font-medium">
          List of User Details
        </div>
        <button
          className="font-Poppins py-1 px-2 border border-black text-black hover:bg-black hover:text-white rounded-sm"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>

      <div className="border-b border-black"> </div>

      {/* All Users & Delete one user*/}
      <div className="w-full space-y-1">
        {users &&
          users.map((item) => (
            // {/* User Card */}
            <div
              key={item.id}
              className="w-full flex items-center justify-between"
            >
              <div className="font-Poppins text-base">
                {item.name} &#x2022; {item.gender} &#x2022; {item.age}
              </div>
              <button
                className="font-Poppins text-sm py-1 px-2 border border-black text-black hover:bg-black hover:text-white rounded-sm"
                onClick={() => handleDeleteUser(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      <div className="border-b border-black"> </div>

      {/* Delete User */}
      <div className="flex items-center justify-center">
        <button
          className="font-Poppins py-1 px-2 border border-black text-black hover:bg-black hover:text-white rounded-sm"
          onClick={handleDeleteAllUsers}
        >
          Delete All Users
        </button>
      </div>

      <div className="border-b border-black"> </div>
    </div>
  );
};

export default UserDetails;
