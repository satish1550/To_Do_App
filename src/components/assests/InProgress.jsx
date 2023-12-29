import React from "react";
import pinkplus from "../../images/pinkplus.svg";
import pink from "../../images/pink.svg";

export default function InProgress({ tasks, onAddTask, onEdit }) {
  return (
    <div className="Todo">
      <div className="ProgressTop">
        <img src={pink} alt="dot" />
        <div className="TodoTopText">In Progress</div>
      </div>
      <div className="ToDoMiddle">
        {tasks
          .filter((task) => task.status === "InProgress")
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
                  <h1 className="ProgressDate">{task.startDate}</h1>
                </div>
                <div className="EndDateComponent">
                  <h1 className="DateText">Deadline</h1>
                  <h1 className="ProgressDate">{task.deadline}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="ProgressBottom" onClick={() => onAddTask("InProgress")}>
        <img src={pinkplus} alt="plus" className="ToDoPlus" />
        <h1 className="TodoBottomText">Add new</h1>
      </div>
    </div>
  );
}