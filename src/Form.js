import React, { useState } from "react";

function Form() {
    const [member, setMember] = useState({ name: "", email: "", role: "", employer: "" });
  
    const handleChange = event => {
      setMember({ ...member, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      setMember({name: "", email: "", role: "", employer: "" });
      console.log(member.name);
      console.log(member.email);
      console.log(member.role);
      console.log(member.employer);
    };

    return (
      <div className="Form">
        {console.log("This is the Form Member: ", member)}
        <form action="" onSubmit={event => handleSubmit(event)}>
          <h1>Ready to Join the Team?</h1>
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
              name="email"
              value={member.email}
              placeholder="Email"
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
              placeholder="Role"
              onChange={event => handleChange(event)}
            />
          </label>
          <br />
          <label>
            Employer:
            <input
              type="text"
              name="employer"
              value={member.employer}
              placeholder="Employer Name"
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