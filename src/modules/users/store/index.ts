import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: string;
  name: string;
}

export interface IUsers {
  users: Array<IUser>;
  user: IUser | null;
}

const initialState: IUsers = {
  users: [{ id: "1", name: "Asadulloh" }],
  user: null
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const user = state.users.find(user => user.id === action.payload);
      state.user = user || null;
    }
  }
});

export const { getUser } = users.actions;

export default users.reducer;
