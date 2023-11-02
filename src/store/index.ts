import { configureStore } from "@reduxjs/toolkit";
import users from "@/modules/users/store";

const store = configureStore({
  reducer: {
    users
  }
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
