import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 2rem;
    border-radius: 5px;
    background-color: rgb(85, 85, 85);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    width: 35%;
    height: 50%;
    position: relative;
    color: white;
  }

  .close-modal {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0.3rem;
    cursor: pointer;
  }

  .left {
    width: 50%;
    border-right: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .left div {
    height: 20%;
  }

  .left p {
    font-size: 1.5rem;
    padding-bottom: 0.7rem;
  }

  .left span {
    color: orange;
    font-weight: 700;
    font-size: 1.7rem;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding-left: 2rem;
  }

  .right ul {
    overflow-y: auto;
    padding: 0.5rem;
  }

  .right ul li {
    list-style: none;
    width: 80%;
    font-size: 1.2rem;
  }
    

  .right .task-list .done {
    text-decoration: line-through;
    text-decoration-color: red;
    text-decoration-thickness: 1px;
  }

  .right img {
    height: 1.3rem;
    cursor: pointer;
  }

  .right .tasks {
    overflow-y: auto;
    height: 65%;
    margin-top: 3rem;

    -webkit-box-shadow: 1px 1px 15px 15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 15px 15px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 15px 15px rgba(0, 0, 0, 0.75);
  }

  .right .task-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem;
  }

  .right .status {
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .right button {
    cursor: pointer;
    padding: 0.7rem;
    border-radius: 2rem;
    border: none;
    background-color: orange;
    color: white;
  }

  .right button:hover {
    background-color: rgb(224, 154, 23);
  }

  .right .status img {
    height: 1rem;
  }

  .right .status p {
    font-size: 1.2rem;
  }

  .right .status span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  //scroll

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2c2c2c;
  }
`;
