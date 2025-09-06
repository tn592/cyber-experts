const List = ({ cart }) => {
	const TotalCost = cart.reduce((sum, expert) => sum + expert.salary, 0);

	return (
		<div className="bg-gray-200 shadow-md rounded-sm text-center p-4 pb-40">
			<h1 className="text-xl mb-1 text-gray-700">
				Expert Added: {cart.length}
			</h1>
			<h1 className="text-xl mb-4 text-gray-700">
				Total Cost: ${TotalCost}
			</h1>

			<div className="space-y-4">
				{cart.map((expert) => (
					<div
						key={expert.id}
						className="flex items-center gap-10 bg-white"
					>
						<img
							src={expert.img}
							className="w-16 h-16 object-cover"
						/>
						<span className="text-gray-700">{expert.name}</span>
					</div>
				))}

				{cart.length > 0 && (
					<button className="bg-blue-500 text-white px-2 py-1 text-center mt-4 w-full rounded-sm">
						Confirm List
					</button>
				)}
			</div>
		</div>
	);
};

export default List;
