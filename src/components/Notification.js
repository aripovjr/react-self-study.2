import React from "react";
import UserForm from "./UserForm";
import "./UserList.css";

function Notification(props) {
  return (
    <div onClick={props.onConfirm} className="notification-background">
      <div className="notification-card">
        <h1 className="error-title">{props.title}</h1>
        <h2 className="error-message">{props.message}</h2>
        <button onClick={props.onConfirm} className="error-button">
          Okay
        </button>
      </div>
    </div>
  );
}

export default Notification;
