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
		<div>
			{/*{error && <p className="bg-red-100 text-red-900"> {error} </p>}*/}
			<p>
				<ul className="list-disc m-5">
					{experts.map((expert) => (
						<li key={expert.id}>
							{expert.name}
							<p> {expert.age} </p>
						</li>
					))}
				</ul>
			</p>
		</div>
	);
};

export default Team;
