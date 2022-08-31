import Image from "next/image";
import { useRouter } from "next/router";
import {
	FiGift,
	FiSmartphone,
	FiPhoneCall,
	FiUser,
	FiLogIn,
} from "react-icons/fi";
import { FaCog } from "react-icons/fa";

const MobileMenu = ({ navLinksData, isOpen, setIsOpen }) => {
	const { push } = useRouter();

	const navigateHandler = (route) => {
		push(route);
		setIsOpen(false);
		return;
	};

	return (
		<aside
			className={`z-10 fixed inset-0 bg-darkColor md:hidden transition-transform ease-in flex flex-col items-center w-[65%] sm:w-[50%] h-full shadow-lg ${
				isOpen ? "translate-x-0" : "translate-x-[-100%]"
			}`}>
			<div className="flex items-center justify-between w-full h-16 px-2 border-b-[0.5px] border-[#ffffff26]">
				<Image
					className="cursor-pointer hover:opacity-[0.9]"
					title="rohy.store"
					src="/assets/logo-with-rose-color.webp"
					alt="logo-with-rose-color.webp"
					width={75}
					height={50}
					objectFit="contain"
					onClick={() => navigateHandler("/")}
				/>

				<span className="flex items-center justify-center hover:bg-[#ffffff08] hover:text-primaryColor cursor-pointer p-3 rounded-full">
					<FaCog />
				</span>
			</div>

			<ul className="flex flex-col items-start justify-center w-full">
				{navLinksData.map((link) => (
					<li
						key={link.slug}
						className="group flex items-center justify-start space-x-4 w-full py-2 px-8 cursor-pointer hover:bg-[#ffffff08] hover:text-primaryColor"
						onClick={() => navigateHandler(link.slug)}>
						{link.Icon}
						<p className="group-hover:text-primaryColor">
							{link.text}
						</p>
					</li>
				))}
			</ul>

			<footer className="fixed bottom-0 flex h-12 items-center justify-center">
				<span className="text-xs text-center text-lightColor">
					&copy; 2022. All Rights Reserverd
				</span>
			</footer>
		</aside>
	);
};

MobileMenu.defaultProps = {
	navLinksData: [
		{
			text: "Nos Offres",
			slug: "/offers",
			Icon: <FiGift />,
		},
		{
			text: "Applications",
			slug: "/apps",
			Icon: <FiSmartphone />,
		},
		{
			text: "Nous Contacter",
			slug: "/contact",
			Icon: <FiPhoneCall />,
		},
		{
			text: "S'inscrir",
			slug: "/auth/signup",
			Icon: <FiUser />,
		},
		{
			text: "Se conneter",
			slug: "/auth/signin",
			Icon: <FiLogIn />,
		},
	],
};

export default MobileMenu;
