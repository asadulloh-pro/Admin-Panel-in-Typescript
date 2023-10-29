import { Result, Spin } from "antd";
import View from "./modules";
import { Suspense } from "react";
import { Loading } from "@components/loading";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const App = () => {
  if (!ready) return <Loading />;
  if (!hasSubDomain)
    return (
      <Result status="404" title="404" subTitle="Bunday sahifa topilmadi" />
    );
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
