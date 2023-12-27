import React from "react";
import menu from "../../images/menu.svg";
import plus from "../../images/plus.svg"

export default function Leftbar() {
  return (
    <div className="leftBar">
      <div className="leftBarTop">
        <img src={menu} alt="menu" className="leftBarTopLogo" />
        <h1 className="leftBarTopLogoText">To Do App</h1>
      </div>
      <hr />
      <div className="leftBarModdile">
        <h1 className="leftBarModdileTitle">Project Title</h1>
        <h1 className="leftBarModdileTitle">Project Title</h1>
        <h1 className="leftBarModdileTitle">Project Title</h1>
        <h1 className="leftBarModdileTitle">Project Title</h1>
      </div>
      <hr />
      <div className="leftBarBottom">
        <img src={plus} alt="plus" className="leftBarBottomImg" />
        <h1 className="leftBarBottomText">Add new Project</h1>
      </div>
    </div>
  );
}
