import { signIn } from "next-auth/react";
import { RiGoogleFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";

const OtherMethods = () => {
	return (
		<div className="flex space-x-4">
			<div className="iconBtn group hover:scale-[1.1] ease">
				<RiGoogleFill
					className="group-hover:text-primaryColor"
					onClick={() => signIn("google")}
				/>
			</div>
			<div className="iconBtn group hover:scale-[1.1] ease">
				<RiFacebookFill className="group-hover:text-primaryColor" />
			</div>
			<div className="iconBtn group hover:scale-[1.1] ease">
				<RiGithubFill
					className="group-hover:text-primaryColor"
					onClick={() => signIn("github")}
				/>
			</div>
		</div>
	);
};

export default OtherMethods;
