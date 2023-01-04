import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";
import { useState } from "react";
import { Toaster } from "react-hot-toast"

function App() {
 
  const [userList, setUserList] = useState([])
  const userAddHandler = (uName, uAge) => {
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName, age:uAge}]
    })
  }

  return (
		<>
			<Toaster/>
			<AddUser onAddUser={userAddHandler} />
			<UserList users={userList} />
		</>
	)
}

export default App;
