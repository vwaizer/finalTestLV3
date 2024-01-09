


import TodoList from "./components/TodoList.js";
import Form from "./components/Form.js";
import "./App.css"
import { useState } from "react";
import ChangeLanguage from "./components/ChangeLanguage.js";
export default function App() {
  const [updated,setUpdated]=useState(false);
  const [changeLanguageVal,setChangeLanguage]=useState(true);
  return (
    <div className="App">
      <div className="container">
        <ChangeLanguage method={setChangeLanguage} value={changeLanguageVal}/>
        <TodoList changeVal={updated} />
        <Form changeVal={updated} method={setUpdated} language={changeLanguageVal}/>
      </div>
   
    </div>
  );
}


