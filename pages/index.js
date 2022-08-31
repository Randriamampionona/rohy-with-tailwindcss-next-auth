import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import { Intro, MovieList, Prices, SupportedDevice } from "../components/Home";

const Home = ({ moviesData }) => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <p>Loading...</p>;
	}

	return (
		<main>
			<Intro />
			{!session ? (
				<>
					<SupportedDevice />
					<Prices />
				</>
			) : (
				<>
					<MovieList moviesData={moviesData} />
				</>
			)}
		</main>
	);
};

export const getServerSideProps = async ({ req }) => {
	const session = await getSession(req);

	const promise1 = (
		await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
		)
	).data?.results;

	const promise2 = (
		await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=2`
		)
	).data?.results;

	const promise3 = (
		await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=3`
		)
	).data?.results;

	const promise4 = (
		await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=4`
		)
	).data?.results;

	const moviesData = await Promise.all([
		promise1,
		promise2,
		promise3,
		promise4,
	]);

	return {
		props: {
			session,
			moviesData: moviesData,
		},
	};
};

export default Home;
