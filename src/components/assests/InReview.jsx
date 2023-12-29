import React from "react";
import skyblueplus from "../../images/skyblueplus.svg";
import skyblue from "../../images/skyblue.svg";

export default function InReview({ tasks, onAddTask, onEdit }) {
  return (
    <div className="Todo">
      <div className="ReviewTop">
        <img src={skyblue} alt="dot" />
        <div className="TodoTopText">In Review</div>
      </div>
      <div className="ToDoMiddle">
        {tasks
          .filter((task) => task.status === "InReview")
          .map((task) => (
            <div
              key={task.id}
              className="TodoComponent"
              onClick={() => onEdit(task)}
            >
              <div className="TodoComponentTop">{task.name}</div>
              <div className="TodoComponentMiddle">
                <div className="StartDateComponent">
                  <h1 className="DateText">Start date</h1>
                  <h1 className="ReviewDate">{task.startDate}</h1>
                </div>
                <div className="EndDateComponent">
                  <h1 className="DateText">Deadline</h1>
                  <h1 className="ReviewDate">{task.deadline}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="ReviewBottom" onClick={() => onAddTask("InReview")}>
        <img src={skyblueplus} alt="plus" className="ToDoPlus" />
        <h1 className="TodoBottomText">Add new</h1>
      </div>
    </div>
  );
}