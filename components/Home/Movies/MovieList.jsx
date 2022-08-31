import List from "./List";

const MovieList = ({ moviesData }) => {
	return (
		<section className="w-full h-auto flex flex-col px-6 sm:px-0 container mx-auto my-12 space-y-12">
			<List text={"My List"} data={moviesData?.[0]} />
			<List text={"New Trending"} data={moviesData?.[1]} />
			<List text={"Recently Added"} data={moviesData?.[2]} />
			<List text={"Watch Again"} data={moviesData?.[3]} />
		</section>
	);
};

export default MovieList;
