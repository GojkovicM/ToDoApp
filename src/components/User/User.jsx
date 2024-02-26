import React, { useContext, useRef } from "react";
import { StyledUser } from "./user.styled";
import { ToDoListContext } from "../../store/todo";

function User() {
  const userInputRef = useRef();

  const { handleUser } = useContext(ToDoListContext);

  const userUppercase = () => {
    const userCapital =
      userInputRef.current.value.charAt(0).toUpperCase() +
      userInputRef.current.value.slice(1);

    handleUser(userCapital);

    if (userCapital) {
      localStorage.setItem("user", userCapital);
    }
  };
  return (
    <StyledUser>
      <label htmlFor="user">User:</label>
      <input type="text" id="user" ref={userInputRef} required />
      <button onClick={() => userUppercase(userInputRef.current.value)}>
        Submit
      </button>
    </StyledUser>
  );
}

export default User;
