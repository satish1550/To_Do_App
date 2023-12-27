import React from "react";
import skyblueplus from "../../../images/skyblueplus.svg";
import skyblue from "../../../images/skyblue.svg";

export default function InReview() {
  return (
    <div>
      <div className="Todo">
        <div className="ReviewTop">
          <img src={skyblue} alt="dot" />
          <div className="TodoTopText">In Review</div>
        </div>
        <div className="ToDoMiddle">
          <div className="TodoComponent">
            <div className="TodoComponentTop">To create To Do App</div>
            <div className="TodoComponentMiddle">
              <div className="StartDatecomponet">
                <h1 className="DateText">Start date</h1>
                <h1 className="ReviewDate">27/12/2023</h1>
              </div>
              <div className="EndDatecomponet">
                <h1 className="DateText">Deadline</h1>
                <h1 className="ReviewDate">01/01/2024</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewBottom">
          <img src={skyblueplus} alt="plus" className="ToDoPlus" />
          <h1 className="TodoBottomText">Add new</h1>
        </div>
      </div>
    </div>
  );
}
