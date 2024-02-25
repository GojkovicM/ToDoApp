import React, { useContext } from "react";
import { StyledHomePage } from "../HomePage/homepage.styled";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDoList from "../../components/ToDoList/ToDoList";
import Footer from "../../components/Footer/Footer";
import User from "../../components/User/User";
import Modal from "../../components/Modal/Modal"
import { ToDoListContext } from "../../store/todo";

function HomePage() {
  const { userName, modalStatus } = useContext(ToDoListContext);

  if (userName) {
    return (
      <StyledHomePage>
        <ToDoForm/>
       {(modalStatus) && <Modal/>}
        <ToDoList/>
        <Footer/>
      </StyledHomePage>
    );
  } else {
    return (
      <StyledHomePage>
        <User/>
        <Footer/>
      </StyledHomePage>
    );
  }
}

export default HomePage;
