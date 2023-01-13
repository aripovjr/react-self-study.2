import React from "react";
import "./UserList.css";

function Notification(props) {
  return (
    <div className="notification-card">
      <h1 className="error-title">{props.title}</h1>
      <h2 className="error-message">{props.message}</h2>
      <button className="error-button">Okay</button>
    </div>
  );
}

export default Notification;
