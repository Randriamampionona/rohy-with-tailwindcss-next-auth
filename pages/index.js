import { Intro, Prices, SupportedDevice } from "../components/Home";

const Home = () => {
	return (
		<main>
			<Intro />
			<SupportedDevice />
			<Prices />
		</main>
	);
};

export default Home;
