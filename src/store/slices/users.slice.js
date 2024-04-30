import { createSlice, legacy_createStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const userIndex = state.findIndex((user) => user.id === action.payload);
      if (userIndex !== -1) {
        state.splice(userIndex, 1);
      }
    },
    deleteAllUsers(state, action) {
      // return state = [];
      return [];
    },
  },
});

// export { usersSlice };
export default usersSlice.reducer;
export const { addUser, deleteUser, deleteAllUsers } = usersSlice.actions;
