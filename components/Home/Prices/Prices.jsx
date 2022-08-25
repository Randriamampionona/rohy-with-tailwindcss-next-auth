const Prices = () => {
	return (
		<section className="relative w-full h-auto py-[4rem] bg-[#b3004a]">
			<div className="flex flex-col items-center auto-spacing space-y-[4rem]">
				<h1
					className="text-center text-[#0f0f10] font-[800] text-[3rem] uppercase"
					style={{ lineHeight: 0.7 }}>
					Tout vos <br />
					<span className="text-2xl font-[600]">
						FILM, SERIES et DOCUMENTAIRES
					</span>
				</h1>

				<div className="flex flex-col items-end">
					<h2
						className="text-[2rem] text-[#fafafa] font-[700]"
						style={{ lineHeight: 1 }}>
						POUR SEULEMENT
					</h2>
					<h1
						className="text-[8rem] text-[#fafafa]"
						style={{ lineHeight: 1, fontFamily: "fantasy" }}>
						19.000
					</h1>
					<span
						className="text-[#0f0f10]"
						style={{ lineHeight: 1, fontFamily: "fantasy" }}>
						AR/MOIS
					</span>
				</div>
			</div>
		</section>
	);
};

export default Prices;
