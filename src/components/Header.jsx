const Header = () => {
	return (
		<div className="bg-[#ffe4c4] mx-4 sm:mx-10 md:mx-20 h-auto md:h-40 mt-3">
			<div className="pt-6 text-center px-2">
				<h1 className="text-3xl sm:text-2xl md:text-3xl text-gray-800 mb-2">
					Make a Cyber Security Team
				</h1>
				<p className="text-sm sm:text-base md:text-lg text-gray-800 mb-2 max-w-2xl mx-auto">
					Our service is under attack so we need to hire a special
					cyber security team
				</p>
				<h1 className="text-3xl sm:text-2xl md:text-3xl text-gray-800">
					Total Budget:
					<span className="text-3xl font-bold">10 million</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
