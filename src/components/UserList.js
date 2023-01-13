import React from "react";
import NoUser from "./NoUser";
import "./UserList.css";

function UserList(props) {
  console.log(props);
  if (props.userList.length === 0) {
    return <NoUser className="no-user" />;
  }

  return (
    <div className="user-list">
      <ul>
        {props.userList.map((user, idx) => (
          <li key={idx}>
            {user.name}, {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
