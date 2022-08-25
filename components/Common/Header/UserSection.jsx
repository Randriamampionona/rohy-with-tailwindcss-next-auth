import { useSession, signOut } from "next-auth/react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const UserSection = () => {
	const { data: session, status } = useSession();
	const { push } = useRouter();

	const clickHandler = () => push("/auth/signin");

	return (
		<div className="hidden sm:block">
			{!session ? (
				<button className="btn" onClick={clickHandler}>
					<span>S&apos;inscrir</span>
					<FaUserCircle />
				</button>
			) : (
				<button
					className="outlineBtn"
					onClick={() =>
						signOut({ redirect: false, callbackUrl: "/" })
					}>
					<span>Logout</span>
					<FaSignOutAlt />
				</button>
			)}
		</div>
	);
};

export default UserSection;
