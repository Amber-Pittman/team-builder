import React, { useState } from "react";

function Form() {
    const [member, setMember] = useState({ name: "", email: "", role: "", employer: "" });
  
    const handleChange = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      setMember({ name: "", email: "", role: "", employer: "" });
      console.log(member.name);
      console.log(member.email);
      console.log(member.role);
      console.log(member.employer);
    };
  
    return (
      <div className="Form">
        {console.log(member)}
        <form action="" onSubmit={event => handleSubmit(event)}>
          <h1>Learn More about the Team!</h1>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={member.name}
              placeholder="Name"
              onChange={event => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="password"
              value={member.email}
              onChange={event => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={member.role}
              onChange={event => handleChange(event)}
            />
          </label>
          <br />
          <button>Submit Now!</button>
        </form>
      </div>
    );
  }



export default Form;