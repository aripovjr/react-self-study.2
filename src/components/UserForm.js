import React, { useState } from "react";
import Notification from "./Notification";
import "./UserForm.css";

function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setErrorMessage] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid input (name or age)",
        error: true,
      });
      return;
    }

    const usersData = {
      name: name,
      age: age,
    };

    props.onGetProps(usersData);

    setName("");
    setAge("");
  };

  const closeMessage = () => {
    setErrorMessage(null);
  };

  return (
    <>
      {error && (
        <Notification
          onConfirm={closeMessage}
          title={error.title}
          message={error.message}
        />
      )}
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input onChange={nameHandler} type="text" value={name} />
        <label>Age</label>
        <input onChange={ageHandler} type="number" value={age} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
}

export default UserForm;
