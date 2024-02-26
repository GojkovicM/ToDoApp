import React, { useContext, useEffect } from "react";
import { StyledModal } from "./modal.styled";
import { ToDoListContext } from "../../store/todo";
import check from "../../assets/checked-modal.svg";
import uncheck from "../../assets/uncheck.svg";

function Modal() {
  const {
    modalTaskData,
    closeModal,
    userName,
    updateItemStatus,
    tasks,
    taskSolved,
  } = useContext(ToDoListContext);

  const indexOfTask = tasks.findIndex((task) => task.id === modalTaskData.id);

  if (typeof modalTaskData.description === "string") {
    modalTaskData.description = JSON.parse(modalTaskData.description);
  }

  return (
    <StyledModal>
      <div className="modal">
        <button onClick={() => closeModal(false)} className="close-modal">
          X
        </button>
        <div className="left">
          <div>
            <p>User: </p>
            <span>{userName}</span>
          </div>
          <div>
            <p>Task: </p>
            <span>{modalTaskData.taskName}</span>
          </div>
          <div>
            <p>Date Created: </p>
            <span>{modalTaskData.time.slice(0, 10)}</span>
          </div>
          <div>
            <p>Time:</p>
            <span> {modalTaskData.time.slice(11, 19)}</span>
          </div>
        </div>
        <div className="right">
          <div className="tasks">
            <ul>
              {modalTaskData.description.map((task, index) => (
                <div className="task-list">
                  <li className={task.status ? "done" : ""}>{task.name}</li>
                  {modalTaskData.done ? (
                    ""
                  ) : (
                    <img
                      src={task.status ? uncheck : check}
                      alt="check"
                      onClick={() => updateItemStatus(modalTaskData.id, index)}
                    />
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="status">
            <p>
              Status:{" "}
              {modalTaskData.done ? <span>Done</span> : <span>Active</span>}
            </p>

            {modalTaskData.description.some((item) => item.status === false) ? (
              ""
            ) : modalTaskData.done ? (
              ""
            ) : (
              <button
                className="done-button"
                onClick={() => taskSolved(modalTaskData.id, indexOfTask)}
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledModal>
  );
}

export default Modal;
