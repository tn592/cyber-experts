import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

const Team = () => {
	const [experts, setExparts] = useState([]);
	// const [cart, setCart] = useState([])

	useEffect(() => {
		fetch("/experts.JSON")
			.then((res) => res.json())
			.then((data) => setExparts(data));
	}, []);

	return (
		// {/*{error && <p className="bg-red-100 text-red-900"> {error} </p>}*/}
		<div className="mx-20 mt-8">
			<div className="grid grid-cols-3 gap-5 p-4">
				{experts.map((expert) => (
					<div
						key={expert.id}
						className="bg-gray-200 rounded-sm shadow-md p-4 text-center"
					>
						<img
							src={expert.img}
							alt={expert.name}
							className="w-36 h-36 mx-auto rounded-full mb-3 object-cover"
						/>
						<h1 className="text-xl text-gray-700">{expert.name}</h1>
						<p className="text-gray-600 text-sm mt-1">
							{" "}
							<span className="font-bold">Age: </span>
							{expert.age}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							{" "}
							<span className="font-bold">Designation: </span>
							{expert.designation}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							{" "}
							<span className="font-bold">Address: </span>
							{expert.address}
						</p>
						<p className="text-gray-600 text-sm mt-4">
							{" "}
							<span className="font-bold">Salary: </span>
							{expert.salary}
						</p>
						<button className="ml-25 flex items-center mt-5 bg-blue-500 rounded-sm text-white px-3 py-2">
							<ShoppingCart />
							Add to List
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
