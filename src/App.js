
import React, { useState } from "react";
import Header from "./components/Header";
import Register from "./components/Register";
import Main from "./components/Main";

function App() {

  const [isRegistered,setIsRegistered] = useState(false)
 
  function handleRegistered(){
    setIsRegistered(prevRegistered => !prevRegistered)
  }

  console.log(isRegistered)

  return (
    <div className="App">

      <Header isRegistered = {isRegistered} submit = {handleRegistered}/>
      {/* {isRegistered ? <Register/> : "" }
      <Main/> */}
      

    </div>
  );
}

export default App;
