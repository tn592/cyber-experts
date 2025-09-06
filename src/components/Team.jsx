import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import List from "./List";

const Team = () => {
	const [experts, setExperts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("/experts.JSON")
			.then((res) => res.json())
			.then((data) => setExperts(data));
	}, []);

	const handleAddToCart = (expert) => {
		if (!cart.find((item) => item.id === expert.id)) {
			setCart([...cart, expert]);
		}
	};

	return (
		<div className="mx-4 sm:mx-10 md:mx-20 mt-8 flex flex-col lg:flex-row gap-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 flex-1">
				{experts.map((expert) => (
					<div
						key={expert.id}
						className="bg-gray-200 rounded-sm shadow-md p-4 text-center"
					>
						<img
							src={expert.img}
							className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full mb-3 object-cover"
						/>
						<h1 className="text-xl text-gray-700">{expert.name}</h1>
						<p className="text-gray-600 text-sm mt-1">
							<span className="font-bold">Age: </span>
							{expert.age}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							<span className="font-bold">Designation: </span>
							{expert.designation}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							<span className="font-bold">Address: </span>
							{expert.address}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							<span className="font-bold">Salary: </span>
							{expert.salary}
						</p>
						<button
							onClick={() => handleAddToCart(expert)}
							className="flex items-center justify-center mt-5 bg-blue-500 hover:bg-blue-600 rounded-md text-white px-3 py-2 w-full sm:w-auto mx-auto"
						>
							<ShoppingCart />
							Add to List
						</button>
					</div>
				))}
			</div>

			<div className="w-full lg:w-1/4 mt-3 lg:mt-5">
				<List cart={cart} />
			</div>
		</div>
	);
};

export default Team;
