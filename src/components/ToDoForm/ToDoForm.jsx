import React, { useContext, useEffect, useRef } from "react";
import { StyledToDoForm } from "./todoform.styled";
import { ToDoListContext } from "../../store/todo";

function ToDoForm() {
  const taskInputRef = useRef();
  const descriptionInputRef = useRef();

  const {
    postTask,
    userName,
    handleTaskItems,
    items,
    deleteTaskItems,
    clearTaskItems,
  } = useContext(ToDoListContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTask = taskInputRef.current.value;

    const time = new Date();
    console.log(time);
    

    const taskData = {
      user: userName,
      taskName: enteredTask,
      description: items,
      time: time,
      done: false,
    };

    postTask(taskData);

    taskInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    clearTaskItems([]);
  };

  return (
    <StyledToDoForm>
      <form className="form" onSubmit={submitHandler}>
        <div className="task">
          <label htmlFor="task">Task name</label>
          <input type="text" id="task" ref={taskInputRef} required />
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <input id="description" ref={descriptionInputRef}></input>
          <p
            onClick={() => {
              handleTaskItems(descriptionInputRef.current.value);
              descriptionInputRef.current.value = "";
            }}
          >
            add to Task
          </p>
        </div>
        <div className="button">
          <div className="item-list">
            <ul>
              {items.map((item) => (
                <li onClick={() => deleteTaskItems(item)}>{item.name}</li>
              ))}
            </ul>
          </div>
          <button>Create Task</button>
        </div>
      </form>
    </StyledToDoForm>
  );
}

export default ToDoForm;
