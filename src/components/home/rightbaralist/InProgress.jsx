import React from "react";
import pinkplus from "../../../images/pinkplus.svg";
import pink from "../../../images/pink.svg";

export default function InProgress() {
  return (
    <div>
      <div className="Todo">
        <div className="ProgressTop">
          <img src={pink} alt="dot" />
          <div className="TodoTopText">In Progress</div>
        </div>
        <div className="ToDoMiddle">
          <div className="TodoComponent">
            <div className="TodoComponentTop">To create To Do App</div>
            <div className="TodoComponentMiddle">
              <div className="StartDatecomponet">
                <h1 className="DateText">Start date</h1>
                <h1 className="ProgressDate">27/12/2023</h1>
              </div>
              <div className="EndDatecomponet">
                <h1 className="DateText">Deadline</h1>
                <h1 className="ProgressDate">01/01/2024</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="ProgressBottom">
          <img src={pinkplus} alt="plus" className="ToDoPlus" />
          <h1 className="TodoBottomText">Add new</h1>
        </div>
      </div>
    </div>
  );
}
