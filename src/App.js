import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm>
        <div>
          <label>Username</label>
          <input type="text" />
          <label>Age</label>
          <input type="number" />
          <button>Add User</button>
        </div>
      </UserForm>
    </div>
  );
}

export default App;
