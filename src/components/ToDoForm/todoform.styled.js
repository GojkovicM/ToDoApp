import styled from "styled-components";

export const StyledToDoForm = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  margin: 2rem auto;
  width: 30%;
  padding: 2rem;

  -webkit-box-shadow: 10px 10px 28px 15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 28px 15px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 28px 15px rgba(0, 0, 0, 1);

  label {
    margin-bottom: 1rem;
  }

  .task,
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    color: orange;
  }

  .task input {
    padding: 0.3rem;
  }

  .button {
    position: relative;
  }

  label {
    font-size: 1.3rem;
  }

  .description input {
    padding: 0.1rem;
  }

  .description p {
    margin-top: 0.5rem;
    padding: 0.3rem;
    cursor: pointer;
    border: 1px solid orange;
  }

  button {
    background-color: orange;
    color: white;
    padding: 0.5rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    border: none;
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
  }

  button:hover {
    background-color: rgb(224, 154, 23);
    cursor: pointer;
  }

  ul {
    display: flex;
    max-width: 60%;
    flex-wrap: wrap;
  }

  li {
    list-style: none;
    border: 1px solid orange;
    padding: 0.3rem;
    margin: 0.2rem;
    cursor: pointer;
    color: white;
  }

  li p {
    padding-left: 1rem;
  }

  li:hover{
    background-color: grey;
  }
`;
