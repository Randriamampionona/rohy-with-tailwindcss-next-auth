import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import UserSection from "./UserSection";

const Header = () => {
	return (
		<header className="z-10 w-full h-[4rem] sm:h-[4.5rem] shadow-xl bg-darkColor sticky top-0">
			<div className="flex items-center justify-between h-full auto-spacing">
				<Logo />
				<NavLinks />
				<UserSection />
				<MobileMenu />
			</div>
		</header>
	);
};

export default Header;
