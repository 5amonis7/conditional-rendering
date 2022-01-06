import React, { useState } from "react";
import Form from "./form";
import User from "./user"
import Button from "./button"




function App() {

  const [ logged, setLogged] = useState(false)

  return (
    <div className="container">
      <div log className="page">
        {!logged && <Form />}
        {logged && <User />}
        <Button click={() => setLogged(!logged)} text={!logged ? "Login": "Logout"} />
      </div>
    </div>
  );
}

export default App;
