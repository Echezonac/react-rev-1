import Card from "../ui/card/Card"
const UserList = ({users}) => {
  return (
		<Card>
			<ul className="list-group list-group-vertical-md p-3">
				{users.map((user, index) => (
					<li key={index} className="list-group-item w-100 my-2">
						{user.name} {user.age}
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList