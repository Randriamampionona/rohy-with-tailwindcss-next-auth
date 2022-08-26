import { FaUserCircle } from "react-icons/fa";

const SignupForm = () => {
	return (
		<form className="w-[65%] md:w-[45%] lg:w-[30%] xl:w-[24%] flex flex-col">
			<div className=" flex gap-[1rem] w-full h-auto  mb-4">
				<div className="flex-grow">
					<label htmlFor="f-name" className="text-xs">
						First name
					</label>
					<input
						className="w-full h-[2.5rem] px-2 outline-0 text-darkColor rounded-sm"
						type="text"
						id="f-name"
						placeholder="First name"
					/>
				</div>
				<div className="flex-grow">
					<label htmlFor="l-name" className="text-xs">
						Last name
					</label>
					<input
						className="w-full h-[2.5rem] px-2  outline-0 text-darkColor rounded-sm"
						type="text"
						id="l-name"
						placeholder="Last name"
					/>
				</div>
			</div>

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
			<div className="w-full h-auto flex flex-col mb-4">
				<label htmlFor="password" className="text-xs">
					Confirm password
				</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-darkColor rounded-sm"
					type="password"
					id="password"
					placeholder="Confirm password"
				/>
			</div>

			<button className="btn">
				<span>Sign Up</span>
				<FaUserCircle />
			</button>
		</form>
	);
};

export default SignupForm;
