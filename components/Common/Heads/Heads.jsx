import Head from "next/head";
import { useRouter } from "next/router";

const Heads = ({ title, desc }) => {
	const { pathname } = useRouter();

	const subtitleHandler = () => {
		if (pathname !== "/") {
			return " | " + pathname?.toUpperCase()?.replace("/", "");
		} else {
			return "";
		}
	};

	return (
		<Head>
			<title>{`${title}${subtitleHandler()}`}</title>
			<meta name="description" content={desc} />
			<link rel="icon" href="/assets/ico.png" />
		</Head>
	);
};

Heads.defaultProps = {
	title: "ROHY",
	desc: "Rohy 2.0 using tailwindCSS",
};

export default Heads;
