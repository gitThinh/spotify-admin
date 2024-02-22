import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { Page404 } from "@/constants/page";
import { Navbar } from "@/constants/component";

const index: React.FunctionComponent = () => {
  return (
    <div className="w-full min-h-[100vh] flex">
      <Navbar />
      <div className="min-full w-full">
        <Routes>
          <Route index element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
};

export default index;
