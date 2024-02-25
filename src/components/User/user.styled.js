import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: orange;
  background-color: rgba(0, 0, 0, 0.75);
  margin-top: 12rem;
  width: 30%;
  padding: 2rem;
  font-size: 2.5rem;

  input{
    margin: 1rem 0;
    padding: 0.3rem;
  }

  button{
    padding: 0.7rem;
    border-radius: 2rem;
    background-color: orange;
    border: none;
    color: aliceblue;
  }

   button:hover{
    background-color: rgb(224, 154, 23);
    cursor: pointer;
   }
`;
