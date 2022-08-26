import { getSession } from "next-auth/react";
import { SignUp } from "./../../components/Authorization";

const signup = () => {
	return (
		<main>
			<SignUp />
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

export default signup;
