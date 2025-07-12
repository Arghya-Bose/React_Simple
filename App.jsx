import { useState } from "react";
import "./App.css";
import Login, { Profile, Setting } from "./UserComponent";


function App() {
  const[name, setName] = useState("");
  const[password, setPassword] = useState("");
  const[email, setEmail] = useState("");

  return (
    <div  >
      <h1>Welcome to React</h1>
      <form action="" method="get">
        <input type="text" value = {name} onChange={(event)=> setName(event.target.value)} placeholder="Enter name" />
        <br /><br />

        <input type ="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="enter password"/>
        <br /><br />

        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter email"/>
        <br /><br />
        <button >Submit</button>
        <button onClick={()=>{setName(""); setEmail(""); setPassword("");}}>Clear</button>
      </form>
      <h1>{name}</h1>
      <h1>{password}</h1>
      <h1>{email}</h1>
    </div>
  );
}
export default App;
