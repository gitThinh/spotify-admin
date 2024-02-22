import * as React from "react";
import { Link } from "react-router-dom";

const index: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-auto w-full min-h-[100vh] bg-[#121212] ">
      <h1 className="text-white">Page not available</h1>
      <p className="text-[#6f6f6f] font-medium text-lg">
        Không tìm thấy đường dẫn, vui lòng thử lại sau!
      </p>
      <Link
        to={"/"}
        className="rounded-3xl border-none text-black mt-5 font-medium px-6 py-3 bg-white hover:shadow-md hover:shadow-slate-300 hover:text-black"
      >
        Trang chủ
      </Link>
    </div>
  );
};

export default index;
