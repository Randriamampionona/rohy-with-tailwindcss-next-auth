import OtherMethods from "./OtherMethods";
import SinginForm from "./SinginForm";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { getSession } from "next-auth/react";

const SignIn = () => {
	return (
		<section className="w-full h-[89vh]">
			<div className="flex flex-col items-center justify-center h-full auto-spacing">
				<h1 className="pb-6">
					<FaUserCircle className="text-7xl" />
				</h1>
				<SinginForm />

				<small className="relative whitespace-nowrap text-lightColor my-4 px-2 before:contents[''] before:absolute before:right-full before:top-1/2 before:w-1/3 before:h-[1px] before:bg-lightColor after:contents[''] after:absolute after:left-full after:top-1/2 after:w-1/3 after:h-[1px] after:bg-lightColor">
					or continue with
				</small>

				<OtherMethods />

				<p className="my-4 text-lightColor text-sm">
					Don&apos;t have an account?{" "}
					<Link href="/auth/signup">
						<a className="text-primaryColor underline">Sign Up</a>
					</Link>
				</p>
			</div>
		</section>
	);
};

export const getServerSideProps = async ({ req, res }) => {
	const session = await getSession({ req });

	if (session & res) {
		res.statusCode = 403;
		res.setHeader(location, "/");

		return {
			props: {
				session,
			},
		};
	}

	return {
		props: {
			session,
		},
	};
};

export default SignIn;
