import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const collectUsersData = [];

function App() {
  const [collectedAllData, setCollectedAllData] = useState(collectUsersData);

  const getProps = (fromChild) => {
    setCollectedAllData((prevUser) => {
      return [fromChild, ...collectedAllData];
    });
  };

  return (
    <div className="App">
      <UserForm onGetProps={getProps} />
      <UserList userList={collectedAllData} />
    </div>
  );
}

export default App;
