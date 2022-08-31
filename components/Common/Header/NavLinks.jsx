import Link from "next/link";

const NavLinks = ({ navLinksData }) => {
	return (
		<ul className="hidden md:flex items-center space-x-[3.5rem]">
			{navLinksData.map((link) => (
				<li
					key={link.slug}
					className="relative text-whiteColor hover:text-primaryColor before:contents-[''] transition-colors ease-in navLink">
					<Link href={link.slug} passHref>
						<a>{link.text}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

NavLinks.defaultProps = {
	navLinksData: [
		{
			text: "Nos Offres",
			slug: "/offers",
		},
		{
			text: "Movies",
			slug: "/movie",
		},
		{
			text: "Applications",
			slug: "/apps",
		},
		{
			text: "Nous Contacter",
			slug: "/contact",
		},
	],
};

export default NavLinks;
