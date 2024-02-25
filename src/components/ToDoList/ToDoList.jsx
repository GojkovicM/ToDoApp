import React, { useContext, useEffect, useState } from "react";
import { StyledToDoList } from "./todolist.styled";
import { ToDoListContext } from "../../store/todo";
import checked from "../../assets/checked.svg";
import inProgress from "../../assets/in-progress.svg";

function ToDoList() {
  const {
    tasks,

    userName,
    handleUser,
    modalHandler,
    deleteTask,
    taskSolved,
  } = useContext(ToDoListContext);

  if (tasks.length !== 0) {
    return (
      <StyledToDoList>
        {tasks.map((task, index) => (
          <div key={task.id} className="task-info" onClick={() => modalHandler(task, index)}>
            <p>{task.taskName}</p>
            <p>{task.time.slice(0, 10)}</p>
            <button
              onClick={(e) => {e.stopPropagation(); taskSolved(task.id, index)}}
              className={task.done ? "task-done" : "task-active"}
            >
              Done
            </button>
            <button onClick={(e) => {e.stopPropagation(); deleteTask(task.id)}} className="delete" >
              Delete
            </button>
            {task.done ? (
              <img src={checked} className="checked" alt="done" />
            ) : (
              <img src={inProgress} className="in-progress" alt="in progress" />
            )}
          </div>
        ))}
        <div className="user-info">
          <p>
            User: <span>{userName}</span>
          </p>
          <button
            onClick={() => {
              handleUser("");
            }}
          >
            Change User
          </button>
        </div>
      </StyledToDoList>
    );
  } else {
    return (
      <StyledToDoList>
        <h1 className="no-tasks">You are TASK free!</h1>
        <div className="user-info">
          <p>
            User: <span>{userName}</span>
          </p>
          <button
            onClick={() => {
              handleUser("");
            }}
          >
            Change User
          </button>
        </div>
      </StyledToDoList>
    );
  }
}

export default ToDoList;
