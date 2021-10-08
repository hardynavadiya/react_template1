import React from "react";

import "../css/work.css";

import Workdata from "./workdata";
import Workprops from "./workprops";

const Work = () => {
  return (
    <div className="body">
      <div className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      {Workdata.map((data) => {
        return (
          <>
            {/* <Workprops name={data.name} image={data.images} /> */}
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={data.images} alt="Card  cap" />
              <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <a href="a" class="btn btn-primary">
                  {data.title}
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>

    
  );
};

export default Work;
