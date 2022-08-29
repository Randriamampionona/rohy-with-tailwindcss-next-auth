import { useSession, signOut } from "next-auth/react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const UserSection = () => {
	const { data: session } = useSession();
	const { push } = useRouter();

	const signupHandler = () => push("/auth/signup");

	const signoutHandler = () =>
		signOut({ redirect: false, callbackUrl: "/auth/signin" });

	return (
		<div className="hidden md:flex items-center space-x-4">
			{!session ? (
				<button className="btn" onClick={signupHandler}>
					<span>S&apos;inscrir</span>
					<FaUserCircle />
				</button>
			) : (
				<button className="outlineBtn" onClick={signoutHandler}>
					<span>Logout</span>
					<FaSignOutAlt />
				</button>
			)}

			{/* user info */}
			{session && (
				<div className="hidden md:flex relative group w-[2.55rem] h-[2.55rem] overflow-hidden rounded-full border-[3px] border-primaryColor cursor-pointer">
					<Image
						src={session?.user?.image}
						alt={session?.user?.name}
						layout="fill"
						objectFit="cover"
						title={session?.user?.email}
						className="group-hover:filter group-hover:contrast-50"
					/>
				</div>
			)}
		</div>
	);
};

export default UserSection;
