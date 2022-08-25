import OtherMethods from "./OtherMethods";
import SinginForm from "./SinginForm";

const SignIn = () => {
	return (
		<section className="w-full h-[89vh]">
			<div className="flex flex-col items-center justify-center h-full auto-spacing">
				<h1 className="text-3xl text-[#b3004a] uppercase pb-6">
					Sign In
				</h1>
				<SinginForm />
				<div className="flex items-center justify-center gap-[0.5rem] w-[25%] py-2">
					<hr className="w-[95%] text-[#cdc6c9]" />
					<span
						className="text-center text-[#cdc6c9]"
						style={{ whiteSpace: "nowrap" }}>
						or signin with
					</span>
					<hr className="w-[95%] text-[#cdc6c9]" />
				</div>
				<OtherMethods />
			</div>
		</section>
	);
};

export default SignIn;
