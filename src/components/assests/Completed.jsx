import React from "react";
import greenplus from "../../images/greenplus.svg";
import green from "../../images/green.svg";

export default function Completed({ tasks, onAddTask, onEdit }) {
  return (
    <div className="Todo">
      <div className="CompletedTop">
        <img src={green} alt="dot" />
        <div className="TodoTopText">Completed</div>
      </div>
      <div className="ToDoMiddle">
        {tasks
          .filter((task) => task.status === "Completed")
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
                  <h1 className="CompletedDate">{task.startDate}</h1>
                </div>
                <div className="EndDateComponent">
                  <h1 className="DateText">Deadline</h1>
                  <h1 className="CompletedDate">{task.deadline}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="CompletedBottom" onClick={() => onAddTask("Completed")}>
        <img src={greenplus} alt="plus" className="ToDoPlus" />
        <h1 className="TodoBottomText">Add new</h1>
      </div>
    </div>
  );
}
