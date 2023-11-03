import service from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  address: {
    geolocation: Record<"long" | "long", string>;
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: `${string}@gmail.com"`;
  username: string;
  password: string;
  name: Record<"firstname" | "lastname", string>;
  phone: string;
}

export interface IUsers {
  users: Array<IUser>;
  user: IUser | null;
}

const initialState: IUsers = {
  users: [],
  user: null
};

export const fetchUser = createAsyncThunk("/users/fetchById", async () => {
  const response = await service.get(`/users`);
  return response.data;
});

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const user = state.users.find(user => user.id === action.payload);
      state.user = user || null;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  }
});

export const { getUser } = users.actions;

export default users.reducer;
