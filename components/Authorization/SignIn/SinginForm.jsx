import { FaUser } from "react-icons/fa";

const SinginForm = () => {
	return (
		<form className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[26%] flex flex-col space-y-4 mb-4">
			{/* <div className=" flex gap-[1rem] w-full h-auto">
				<div className="flex-grow">
					<label htmlFor="f-name">First name</label>
					<input
						className="w-full h-[2.5rem] px-2 outline-0 text-[#0f0f10] rounded-sm"
						type="text"
						id="f-name"
						placeholder="First name"
					/>
				</div>
				<div className="flex-grow">
					<label htmlFor="l-name">Last name</label>
					<input
						className="w-full h-[2.5rem] px-2  outline-0 text-[#0f0f10] rounded-sm"
						type="text"
						id="l-name"
						placeholder="Last name"
					/>
				</div>
			</div> */}

			{/* <div className="w-full h-auto flex flex-col">
				<label htmlFor="username">Username</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-[#0f0f10] rounded-sm"
					type="text"
					id="username"
					placeholder="Username"
				/>
			</div> */}

			<div className="w-full h-auto flex flex-col">
				<label htmlFor="email">Email</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-[#0f0f10] rounded-sm"
					type="email"
					id="email"
					placeholder="email"
				/>
			</div>

			<div className="w-full h-auto flex flex-col">
				<label htmlFor="password">Password</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-[#0f0f10] rounded-sm"
					type="password"
					id="password"
					placeholder="password"
				/>
			</div>
			{/* <div className="w-full h-auto flex flex-col">
				<label htmlFor="password">Confirm password</label>
				<input
					className="w-full h-[2.5rem] px-2  outline-0 text-[#0f0f10] rounded-sm"
					type="password"
					id="password"
					placeholder="Confirm password"
				/>
			</div> */}

			<button className="outlineBtn">
				<span>Sign In</span>
				<FaUser />
			</button>
		</form>
	);
};

export default SinginForm;
