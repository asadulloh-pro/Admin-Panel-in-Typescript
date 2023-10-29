import { Spin } from "antd";
import View from "./modules";
import { Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const App = () => {
  return (
    <Suspense
      fallback={
        <Spin size="large" className="loading-style" indicator={antIcon} />
      }
    >
      <View />
    </Suspense>
  );
};
