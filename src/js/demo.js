import React from "react";

import "../css/demo.css";

import Demoprops from "./demoprops";
import Demoall from "./demoall";

const Demo = () => {
  return (
    <>
      <div className="main_demo">
        {Demoall.map((data) => {
          return <Demoprops image={data.image} title={data.title} />;
        })}
      </div>
    </>
  );
};

export default Demo;
