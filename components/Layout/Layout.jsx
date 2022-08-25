import { Header, Heads } from "../Common";

const Layout = ({ children }) => {
	return (
		<>
			<Heads />
			<Header />
			{children}
		</>
	);
};

export default Layout;
