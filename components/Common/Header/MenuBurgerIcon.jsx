import { HiMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const MenuBurgerIcon = ({ isOpen, setIsOpen }) => {
	return (
		<div className="block md:hidden">
			<span
				className="text-whiteColor cursor-pointer"
				onClick={() => setIsOpen((prev) => !prev)}>
				{isOpen ? (
					<FaTimes className="text-3xl" />
				) : (
					<HiMenuAlt1 className="text-3xl" />
				)}
			</span>
		</div>
	);
};

export default MenuBurgerIcon;
