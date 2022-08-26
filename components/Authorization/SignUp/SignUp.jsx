import OtherMethods from "./OtherMethods";
import SignupForm from "./SignupForm";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
	return (
		<section className="w-full h-[89vh]">
			<div className="flex flex-col items-center justify-center h-full auto-spacing">
				<h1 className="pb-6">
					<FaUserCircle className="text-7xl" />
				</h1>
				<SignupForm />
				<small className="relative whitespace-nowrap text-lightColor my-4 px-2 before:contents[''] before:absolute before:right-full before:top-1/2 before:w-1/3 before:h-[1px] before:bg-lightColor after:contents[''] after:absolute after:left-full after:top-1/2 after:w-1/3 after:h-[1px] after:bg-lightColor">
					or continue with
				</small>
				<OtherMethods />

				<p className="my-4 text-lightColor text-sm">
					Already have an account?{" "}
					<Link href="/auth/signin">
						<a className="text-primaryColor underline">Sign In</a>
					</Link>
				</p>
			</div>
		</section>
	);
};

export default SignUp;
