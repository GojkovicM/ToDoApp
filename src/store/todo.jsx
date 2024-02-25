import { createContext, useEffect, useState } from "react";

export const ToDoListContext = createContext({
  postTask: () => {},
  tasks: undefined,
  getTask: () => {},
  setDoneTasks: () => {},
  handleUser: () => {},
  userName: "",
  handleTaskItems: () => {},
  items: [""],
  clearTaskItems: () => {},
  deleteTaskItems: () => {},
  modalHandler: () => {},
  modalTaskData: {},
  closeModal: () => {},
  modalStatus: false,
  deleteTask: () => {},
  taskSolved: () => {},
  updateItemStatus: () => {},
});

const ToDoListHandler = ({ children }) => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [user, setUser] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [modalData, setModalData] = useState();
  const [toggleModal, setToggleModal] = useState(false);
  

  const postTask = (data) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTask);
  };

  const getTask = () => {
    fetch("http://localhost:5000/tasks").then((res) => {
      res.json().then((data) => {
        const filterUser = data.filter(
          (filteredData) => filteredData.user === user
        );
        filterUser.forEach(
          (task) => (task.description = JSON.parse(task.description))
        );
        setToDoTasks(filterUser);
      });
    });
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTask);
  };

  const taskSolved = (id, index) => {
    const finished = toDoTasks[index];
    finished.done = 1;

    if (typeof finished.description === "object") {
      finished.description = JSON.stringify(finished.description);
    }

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(finished),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTask);

    const updatedItems = toDoTasks.find((task) => task.id === id);
    setModalData(updatedItems);
  };

  const handleUser = (value) => {
    setUser(value.charAt(0).toUpperCase() + value.slice(1));
  };

  const handleTaskItems = (item) => {
    if (item !== "") {
      const newItem = { name: item, status: false };
      setTaskItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const deleteTaskItems = (item) => {
    setTaskItems((prevItems) => prevItems.filter((task) => task !== item));
  };

  const updateItemStatus = (id, itemIndex) => {
    const updatedTask = toDoTasks.find((task) => task.id === id);
    updatedTask.description[itemIndex].status =
      !updatedTask.description[itemIndex].status;

    if (updatedTask.description[itemIndex].status) {
      const itemSolved = updatedTask.description[itemIndex];
      updatedTask.description.splice(itemIndex, 1);
      updatedTask.description.push(itemSolved);
    }

    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTask),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTask);

    const updatedItems = toDoTasks.find((task) => task.id === id);
    setModalData(updatedItems);
  };

  const modalHandler = (data) => {
    setModalData(data);
    setToggleModal(true);
  };

  useEffect(() => {
    if (user !== "") {
      getTask();
    }
  }, [user]);

  return (
    <ToDoListContext.Provider
      value={{
        postTask,
        tasks: toDoTasks,
        getTask,
        setDoneTasks: setToDoTasks,
        handleUser,
        userName: user,
        handleTaskItems,
        items: taskItems,
        clearTaskItems: setTaskItems,
        deleteTaskItems,
        modalHandler,
        modalTaskData: modalData,
        closeModal: setToggleModal,
        modalStatus: toggleModal,
        deleteTask,
        taskSolved,
        updateItemStatus,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListHandler };
