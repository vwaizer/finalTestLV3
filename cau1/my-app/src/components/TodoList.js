import React, { useEffect, useState } from "react";
import { TodoItem } from "./ToDoItem";

const TodoList = (props) => {
  console.log(props.changeVal);
  let initValue = JSON.parse(localStorage.getItem("data"));
  if(initValue == null){
    initValue=[]
  }
  const [taskList, setTaskList] = useState(initValue);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("data")));
  }, [props.changeVal]);
  useEffect(() => {
    const addStorage = (event) => {
      if (event.key === "data") {
        setTaskList(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", addStorage);

    return () => {
      window.removeEventListener("storage", addStorage);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskList));
  }, [taskList]);

  const setList = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].isCheck=!updatedTaskList[index].isCheck

    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo-list-container">
      {taskList.length > 0 &&
        taskList.map((item, index) => (
          <TodoItem key={index} task={item} index={index} Function={setList} />
        ))}
    </div>
  );
};

export default TodoList;
