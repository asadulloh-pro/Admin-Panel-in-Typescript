// import { Loading } from "@/components/loading";
// import { Result } from "antd";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./users/store";
import { RootState } from "@/store";

const View = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.users.user);
  return (
    <div>
      <Button
        children="Get user"
        onClick={() => {
          dispatch(getUser("1"));
        }}
      />
      <h1>{user?.id}: {user?.name}</h1>
      {/* <Result status="404" title="404" subTitle="Bunday sahifa topilmadi" /> */}
      {/* <Loading/> */}
    </div>
  );
};

export default View;
