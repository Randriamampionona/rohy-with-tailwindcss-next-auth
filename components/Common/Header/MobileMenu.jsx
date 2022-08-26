import { HiMenuAlt1 } from "react-icons/hi";

const MobileMenu = () => {
	return (
		<div className="block sm:hidden">
			<span className="text-whiteColor cursor-pointer">
				<HiMenuAlt1 className="text-3xl" />
			</span>
		</div>
	);
};

export default MobileMenu;
