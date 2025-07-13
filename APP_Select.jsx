import { useState } from "react";
import "./App.css";
import Login, { Profile, Setting } from "./UserComponent";


function App() {
  const[value, setValue] = useState("")
  const [select, setSelect] = useState("")

  const handelChange =(event)=>{
    setValue(event.target.value)
  }

  const handleSelectChange = (event)=>{
    setSelect(event.target.value)
  }


  return (
    <div>
      <h1>React Check Box</h1>
      <h1>Selected value:{" "}{value}</h1>
      <input type ="radio" name ="value" onChange={handelChange} value="php" id="php" /> 
      <label htmlFor="php">PHP</label><br />
      <input type ="radio" name ="value" onChange={handelChange} value="javascript" id="javascript" /> 
      <label htmlFor="javascript">JavaScript</label> <br /><br /><br />

      <h1>Selected option: {select}</h1>
      <select onChange={handleSelectChange} defaultValue={"php"}>
        <option value="php">PHP</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
      </select>

    </div>
  );
}
export default App;
