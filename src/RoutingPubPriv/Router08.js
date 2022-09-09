import React from "react";
import { Route,  Routes } from "react-router-dom";
import Login08 from "./Login08";
import Register08 from "./Register08";
import Dashboard08 from "./Dashboard08";
import FourZeroFour from "./FourZeroFour";

const Router08 = (props) => {
  return (
    <Routes>
      {/* <Route path="/" component={Login08} exact={true} />
      <Route path="/login" component={Login08} />
      <Route path="/register" component={Register08} />
      <Route path="/dashboard" component={Dashboard08} />
      <Route component={FourZeroFour} /> */}

      <Route path="/" exact element={<Login08 />} />
      <Route path="/login" element={<Login08 />} />
      <Route path="/register" element={<Register08 />} />
      <Route path="/dashboard" element={<Dashboard08 />} />
      <Route element={<FourZeroFour />} />
    </Routes>
  );
};

export default Router08;
