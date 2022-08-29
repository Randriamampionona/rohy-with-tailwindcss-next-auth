import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserSection from "./UserSection";
import MenuBurgerIcon from "./MenuBurgerIcon";
import MobileMenu from "./MobileMenu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="z-10 w-full h-navbarHeight shadow-xl bg-darkColor sticky top-0">
				<div className="flex items-center justify-between h-full auto-spacing">
					<Logo />
					<NavLinks />
					<UserSection />
					<MenuBurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</header>

			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};

export default Header;
