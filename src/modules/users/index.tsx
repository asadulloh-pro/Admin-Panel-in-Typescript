import store, { RootState } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUser } from "./store";

const Users = () => {
  const users = useSelector((state: RootState) => state.users.users);
  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);

  console.log(users);
  return <div></div>;
};

export default Users;
