import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SigninPage = () => {
	const [inputType, setInputType] = useState("password");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<main>
			<section className="w-full h-customScreen">
				<div className="auto-spacing h-full flex items-center">
					<div className="flex flex-col items-center space-y-4 w-2/3 sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 m-auto ">
						<FaUserCircle className="text-7xl mb-8" />

						<form className="w-full flex flex-col items-center gap-1">
							{/* input email */}
							<div className="w-full">
								<label
									htmlFor="email"
									className="text-xs text-lightColor mb-2">
									Email
									<sup className="text-red-600 text-xs">
										*
									</sup>
								</label>
								<div className="flex items-center space-x-2 bg-whiteColor rounded-sm py-[0.7rem] px-[0.5rem]">
									<FiMail className="flex-shrink-0 text-lightColor" />
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email address"
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="bg-transparent flex-grow outline-none border-none text-sm placeholder:text-lightColor text-darkColor"
									/>
								</div>
							</div>

							{/* input password */}
							<div className="w-full">
								<label
									htmlFor="password"
									className="text-xs text-lightColor mb-2">
									Password
									<sup className="text-red-600 text-xs">
										*
									</sup>
								</label>
								<div className="flex items-center space-x-2 bg-whiteColor rounded-sm py-[0.7rem] px-[0.5rem]">
									<FiLock className="flex-shrink-0 text-lightColor" />
									<input
										type={inputType}
										name="password"
										id="password"
										placeholder="Password"
										required
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										className="bg-transparent flex-grow outline-none border-none text-sm placeholder:text-lightColor text-darkColor"
									/>
									<>
										{password.trim() &&
											(inputType === "password" ? (
												<FiEye
													className="flex-shrink-0 text-darkColor"
													onClick={() =>
														setInputType("text")
													}
												/>
											) : (
												<FiEyeOff
													className="flex-shrink-0 text-darkColor"
													onClick={() =>
														setInputType("password")
													}
												/>
											))}
									</>
								</div>
							</div>

							<button className="btn w-full mt-2">
								<span>Signin</span>
								<FaSignInAlt className="" />
							</button>
						</form>

						<div className="flex items-center justify-between w-full">
							<hr className="flex-1 border-lightColor" />
							<span className="flex-shrink-0 text-center text-xs text-lightColor px-2">
								or continue with google
							</span>
							<hr className="flex-1 border-lightColor" />
						</div>

						<button
							className="outlineBtn w-full"
							onClick={() => signIn("google")}>
							<FcGoogle />
							<span className="text-sm">Signin with google</span>
						</button>

						<p className="text-center text-sm text-whiteColor mt-4">
							Don&apos;t have an account?{" "}
							<Link href="/auth/signup" passHref>
								<a className="text-primaryColor hover:underline">
									signup
								</a>
							</Link>
						</p>
					</div>
				</div>
			</section>
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

export default SigninPage;
