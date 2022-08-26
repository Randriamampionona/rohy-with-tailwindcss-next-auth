import { getSession } from "next-auth/react";
import { SignIn } from "./../../components/Authorization";

const signin = () => {
	return (
		<main>
			<SignIn />
		</main>
	);
};

export const getServerSideProps = async ({ req, res }) => {
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

export default signin;
