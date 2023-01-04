import { useState } from "react"
import Card from "../ui/card/Card"
import Button from "../ui/button/Button"
import toast from "react-hot-toast"

const AddUser = ({onAddUser}) => {

    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')

    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }
    const ageHandler = (event) => {
			setAge(event.target.value)
	}

  const addUserHandler = (event) => {
    event.preventDefault()
    if(userName.trim().length === 0 || age.trim().length === 0){
        return toast.error("User input error")
    }
    if(+age < 1){
        return toast.error("Your age can't be less than 1");
    }
    onAddUser(userName,age)
    setUserName('')
    setAge('')
    toast.success("User added")
   
  }
 

  return (
		<Card>
			<form className="col-6 mx-auto" onSubmit={addUserHandler}>
				<label htmlFor="username" className="fw-bold">
					Username:{" "}
				</label>{" "}
				<br />
				<input
					type="text"
					id="username"
					className="form-control"
					style={{ width: "300px" }}
					onChange={userNameHandler}
                    value={userName}
				/>
				<label htmlFor="age" className="fw-bold">
					Age (years){" "}
				</label>
				<br />
				<input
					type="number"
					id="age"
					className="form-control"
					style={{ width: "300px" }}
					onChange={ageHandler}
                    value={age}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser