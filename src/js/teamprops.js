import React from "react";
import '../css/team.css'

const Teamprops = (props) => {
  return (
    <>
      <div>
        <img src={props.images} alt="images" className="avatar"/>
        <h3>{props.name}</h3>
        <p>{props.course}</p>
      </div>
    </>
  );
};

export default Teamprops;
