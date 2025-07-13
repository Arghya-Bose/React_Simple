import { useState } from "react";

function CheckBox() {

    const[skills, setSkills]=useState([""])
    const handelChange=(event)=>{
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }
        else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))
        }
    }
  return (
    <div>
        <h3>select your type </h3>

      <input type="checkbox" id="php" onChange={handelChange} value="php" />
      <label htmlFor="php">PHP</label><br />

      <input type="checkbox" id="javascript" onChange={handelChange} value="javascript" />
      <label htmlFor="javascript">JavaScript</label><br />

      <input type="checkbox" id="python" onChange={handelChange} value="python" />
      <label htmlFor="python">Python</label><br />
      <h1>{skills}</h1>
    </div>
  );
}
export default CheckBox;