import React from "react";
import "./Wrapper.scss";

const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  );
};

export default Wrapper;
