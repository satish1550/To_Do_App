import React from "react";
import plus from "../../../images/plus.svg";
import blue from "../../../images/blue.svg";

export default function ToDo() {
  return (
    <div>
      <div className="Todo">
        <div className="TodoTop">
          <img src={blue} alt="dot" className="dotImg" />
          <h1 className="TodoTopText">To Do</h1>
        </div>
        <div className="ToDoMiddle">
          <div className="TodoComponent">
            <div className="TodoComponentTop">To create To Do App</div>
            <div className="TodoComponentMiddle">
              <div className="StartDatecomponet">
                <h1 className="DateText">Start date</h1>
                <h1 className="ToDoDate">27/12/2023</h1>
              </div>
              <div className="EndDatecomponet">
                <h1 className="DateText">Deadline</h1>
                <h1 className="ToDoDate">01/01/2024</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="TodoBottom">
          <img src={plus} alt="plus" className="ToDoPlus" />
          <h1 className="TodoBottomText">Add new</h1>
        </div>
      </div>
    </div>
  );
}
