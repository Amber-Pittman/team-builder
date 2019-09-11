import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [appMember, setAppMember] = useState([
      { 
            name: "Amber Pittman", 
            email: "some@email.com", 
            role: "Tech CSA", 
            employer: "Food Blogger Pro" 
        },
      { 
          name: "Nick Pittman", 
          email: "something@email.com", 
          role: "Electrical Maintenance Manager", 
          employer: "Metal Coaters" 
        },
      { 
          name: "Rocket Raccoon", 
          email: "grootsDad@gotg.com", 
          role: "Trash Panda", 
          employer: "The Revengers" }
    ]);

  

  return (
    <div className="App">
        {console.log("This is the App Member Info: ", appMember)}
        <Form appMember={appMember} setAppMember={setAppMember} />
      
    </div>
  );
}

export default App;