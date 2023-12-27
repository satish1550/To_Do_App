import React from "react";
import greenplus from "../../../images/greenplus.svg";
import green from "../../../images/green.svg";

export default function Completed() {
  return (
    <div>
      <div className="Todo">
        <div className="CompletedTop">
          <img src={green} alt="dot" />
          <div className="TodoTopText">Completed</div>
        </div>
        <div className="ToDoMiddle">
          <div className="TodoComponent">
            <div className="TodoComponentTop">To create To Do App</div>
            <div className="TodoComponentMiddle">
              <div className="StartDatecomponet">
                <h1 className="DateText">Start date</h1>
                <h1 className="CompletedDate">27/12/2023</h1>
              </div>
              <div className="EndDatecomponet">
                <h1 className="DateText">Deadline</h1>
                <h1 className="CompletedDate">01/01/2024</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="CompletedBottom">
          <img src={greenplus} alt="plus" className="ToDoPlus" />
          <h1 className="TodoBottomText">Add new</h1>
        </div>
      </div>
    </div>
  );
}
