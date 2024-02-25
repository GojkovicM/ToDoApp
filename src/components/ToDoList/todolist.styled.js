import styled from "styled-components";

export const StyledToDoList = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  margin: 2rem auto;
  width: 80%;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column-reverse;

  .task-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* padding: 0.5rem; */
    padding: 0.6rem;
    
  }

  .task-done {
    opacity: 0;
    width: 7%;
  }

  .task-active:hover {
    background-color: green;
    cursor: pointer;
    color: white;
  }

  .checked,
  .in-progress {
    height: 2rem;
  }

  .task-active,
  .delete {
    border: none;
    border-radius: 2rem;
    padding: 0.5rem;
    background-color: white;
    width: 7%;
  }

  
  p {
    width: 35%;
    text-wrap: wrap;
    font-size: 1.4rem;
  }

  .delete:hover {
    background-color: red;
    cursor: pointer;
    color: white;
  }

  .no-tasks {
    text-align: center;
    margin-top: 1rem;
    text-wrap: nowrap;
  }

  div {
    border-bottom: 1px solid white;
  }

  div:first-child {
    border: none;
    padding-bottom: 0;
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.6rem;
  }

  .user-info button {
    padding: 0.5rem;
    border: none;
    border-radius: 2rem;
    background-color: orange;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .user-info button:hover {
    background-color: rgb(224, 154, 23);
    cursor: pointer;
  }

  .user-info p {
    font-size: 1.3rem;
  }

  .user-info span {
    color: orange;
    font-size: 1.7rem;
  }

  
`;
