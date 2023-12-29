import React, { useState, useEffect } from "react";

function TaskModal({ isOpen, onClose, onSubmit, initialTask = null }) {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskStatus, setTaskStatus] = useState("ToDo");
  const [errors, setErrors] = useState({
    name: "",
    startDate: "",
    deadline: "",
  });

  useEffect(() => {
    if (initialTask) {
      setTaskName(initialTask.name);
      setStartDate(initialTask.startDate);
      setDeadline(initialTask.deadline);
      setTaskStatus(initialTask.status);
      setErrors({ name: "", startDate: "", deadline: "" });
    } else {
      resetForm();
    }
  }, [initialTask]);

  const resetForm = () => {
    setTaskName("");
    setStartDate("");
    setDeadline("");
    setTaskStatus("ToDo");
    setErrors({ name: "", startDate: "", deadline: "" });
  };

  const validateForm = () => {
    let newErrors = { name: "", startDate: "", deadline: "" };
    let isValid = true;

    if (!taskName) {
      newErrors.name = "Task name is required.";
      isValid = false;
    }
    if (!startDate) {
      newErrors.startDate = "Start date is required.";
      isValid = false;
    }
    if (!deadline) {
      newErrors.deadline = "Deadline is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const taskData = {
        id: initialTask ? initialTask.id : Date.now(),
        name: taskName,
        startDate,
        deadline,
        status: taskStatus,
      };
      onSubmit(taskData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modalTask">
      <div className="task">
        <h1 className="taskTop">{initialTask ? "Edit Task" : "Add Task"}</h1>
        <label htmlFor="text" className="labeltext">
          Name of the task
        </label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="input"
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <div className="dates">
          <div className="StartDate EndDate">
            <label htmlFor="text" className="labeltext">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
              className="startDate"
            />
            {errors.startDate && (
              <div className="error">{errors.startDate}</div>
            )}
          </div>
          <div className="EndDate">
            <label htmlFor="text" className="labeltext">
              End Date
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="Deadline"
              className="startDate"
            />
            {errors.deadline && <div className="error">{errors.deadline}</div>}
          </div>
        </div>
        <select
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
          className="list"
        >
          <option value="ToDo">To Do</option>
          <option value="InProgress">In Progress</option>
          <option value="InReview">In Review</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="buttons">
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="TaskButtonsCansel"
          >
            Cancel
          </button>
          <button onClick={handleSubmit} className="TaskButtons">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
