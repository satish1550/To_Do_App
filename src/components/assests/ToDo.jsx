import React from "react";
import plus from "../../images/plus.svg";
import blue from "../../images/blue.svg";

export default function ToDo({ tasks, onAddTask, onEdit }) {
  return (
    <div className="Todo">
      <div className="TodoTop">
        <img src={blue} alt="dot" className="dotImg" />
        <h1 className="TodoTopText">To Do</h1>
      </div>
      <div className="ToDoMiddle">
        {tasks
          .filter((task) => task.status === "ToDo")
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
                  <h1 className="ToDoDate">{task.startDate}</h1>
                </div>
                <div className="EndDateComponent">
                  <h1 className="DateText">Deadline</h1>
                  <h1 className="ToDoDate">{task.deadline}</h1>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="TodoBottom" onClick={() => onAddTask("ToDo")}>
        <img src={plus} alt="plus" className="ToDoPlus" />
        <h1 className="TodoBottomText">Add new</h1>
      </div>
    </div>
  );
}
