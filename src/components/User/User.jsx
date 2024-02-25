import React, { useContext, useRef } from "react";
import { StyledUser } from "./user.styled";
import { ToDoListContext } from "../../store/todo";

function User() {
  const userInputRef = useRef();

  const { handleUser } = useContext(ToDoListContext);

  return (
    <StyledUser>
      <label htmlFor="user">User:</label>
      <input type="text" id="user" ref={userInputRef} required />
      <button onClick={() => handleUser(userInputRef.current.value)}>
        Submit
      </button>
    </StyledUser>
  );
}

export default User;
