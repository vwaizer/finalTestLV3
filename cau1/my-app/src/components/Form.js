import React, { useState } from "react";


const Form = (props) => {
  console.log(props.changeVal);
  const [inputVal, setInputVal] = useState("");
  let initValue = [];
  if (JSON.parse(localStorage.getItem("data")) != null) {
    initValue = JSON.parse(localStorage.getItem("data"));
  }
  const [taskList, setTaskList] = useState(initValue);
 
  const inputFunc = (event) => {
    setInputVal(event.target.value);
  };

  const submitFunc = (event) => {
    event.preventDefault();
    const newTask = {
      value: inputVal,
      isCheck: false,
    };
    const result = [...taskList, newTask];
    setTaskList(result);
    localStorage.setItem("data", JSON.stringify(result));
    setInputVal("");
    props.method(!props.changeVal);
  };

  return (
    
    <>
    <form className="form" onSubmit={submitFunc}>
      <input placeholder="" value={inputVal} onChange={inputFunc} />
      <button type="submit">{props.language === true ? `submit` : "Nộp" }</button>
    </form>
    </>
  );
};

export default Form;
