import React, { useState } from "react";
import "./App.css";


function App() {
  const [member, setMember] = useState({ name: "", email: "", role: "" });


  const handleMemberChange = event => {
    setMember({ ...member, [event.target.value]: event.target.value });
  };


  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name);
    console.log(member.email);
    console.log(member.role);
  };


  return (
    <div className="App">
      {console.log(member)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Member Name:
          <input type="text" name="name" onChange={event => handleMemberChange(event)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" onChange={event => handleMemberChange(event)} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" name="role" onChange={event => handleMemberChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}


export default App;