import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import type { ComponentType } from "react";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Loading: ComponentType = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 z-50">
      <Spin size="large" className="loading-style" indicator={antIcon} />
  </div>
);
