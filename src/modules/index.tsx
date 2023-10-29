import { Loading } from "@/components/loading";
import { Result } from "antd";

const View = () => {
  return (
    <div>
      <Result status="404" title="404" subTitle="Bunday sahifa topilmadi" />
      <Loading/>
    </div>
  );
};

export default View;
