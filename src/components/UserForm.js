import styled from "styled-components";

const UserForm = styled.div`
  color: #111;
  font-weight: bold;
  width: 550px;
  background-color: transparant;
  border-radius: 7px;
  box-shadow: 0px 0px 11px -3px rgba(45, 102, 230, 1);
  padding: 20px;
  display: flex;
  flex-direction: column;

  & label {
    font-size: 20px;
  }

  & input {
    margin: 10px 0;
    outline: none;
    border: 1px solid #111;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
  }

  & button {
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    color: #fff;
    background-color: #008cba;
    margin-top: 10px;
  }
`;

// function UserForm() {
//   return (
//     <div>
//       <label>Username</label>
//       <input type="text" />
//       <label>Age</label>
//       <input type="number" />
//       <button>Add User</button>
//     </div>
//   );
// }

export default UserForm;
