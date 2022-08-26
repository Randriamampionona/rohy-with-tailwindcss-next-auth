import { FaSignInAlt } from "react-icons/fa";

const SinginForm = () => {
	return (
		<form className="w-[65%] md:w-[45%] lg:w-[30%] xl:w-[24%] flex flex-col">
			<div className="w-full h-auto flex flex-col mb-4">
				<label htmlFor="email" className="text-xs">
					Email
				</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-darkColor rounded-sm"
					type="email"
					id="email"
					placeholder="email"
				/>
			</div>

			<div className="w-full h-auto flex flex-col mb-4">
				<label htmlFor="password" className="text-xs">
					Password
				</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-darkColor rounded-sm"
					type="password"
					id="password"
					placeholder="password"
				/>
			</div>

			<button className="btn">
				<span>Sign In</span>
				<FaSignInAlt />
			</button>
		</form>
	);
};

export default SinginForm;
