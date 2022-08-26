import Link from "next/link";

const NavLinks = ({ navLinksData }) => {
	return (
		<ul className="hidden sm:flex items-center space-x-[3.5rem]">
			{navLinksData.map((link) => (
				<li
					key={link.slug}
					className="text-whiteColor hover:text-primaryColor">
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
