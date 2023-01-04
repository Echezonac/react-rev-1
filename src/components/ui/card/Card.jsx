const Card = ({ children }) => {
	return (
		<div class="card bg-light text-dark py-3 mx-auto my-3" style={{ width: "600px" }}>
			{children}
		</div>
	)
}

export default Card