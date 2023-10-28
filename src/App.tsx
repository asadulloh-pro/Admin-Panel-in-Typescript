import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment } from "@/store/auth";
import View from "./modules";

function App() {
  const count = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Button onClick={() => dispatch(increment())} type="primary">
        Button count: {count}
      </Button> */}
      <View />
    </>
  );
}

export default App;
