import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

function NameModal({ isOpen, onClose, onSubmit }) {
  const [newName, setNewName] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = () => {
    onSubmit(newName);
    setNewName(""); // Reset the input field after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modalBackdrop" ref={modalRef}>
      <div className="modal">
        <div className="modalTop">
          <h1>Project Title</h1>
          <X onClick={onClose} size={30} className="icon" />
        </div>
        <input
          className="input"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <div className="modalBottom">
          <button onClick={handleSubmit} className="updateButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default NameModal;
