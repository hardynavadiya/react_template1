import React from "react";

import "../css/team.css";
import Teamprops from "./teamprops";
import Avatar from "../images/avatar.jpg";

const Team = () => {
  return (
    <>
      <div className = "heading"> 
        <h2>OUR TEAM</h2>
        <p>Meet the team - our office rats:</p>
      </div>
      <div className="main_class">
        <Teamprops images={Avatar} name="Johnny Walker" course="Web Designer" />
        <Teamprops images={Avatar} name="Rebecca Flex" course="Support" />
        <Teamprops images={Avatar} name="Jan Ringo" course="Boss man" />
        <Teamprops images={Avatar} name="Kai Ringo" course="Fixer" />
      </div>
    </>
  );
};

export default Team;
