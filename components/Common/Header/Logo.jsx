import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
	const { push } = useRouter();

	const clickHandler = () => push("/");

	return (
		<div className="flex items-center">
			<Image
				className="cursor-pointer hover:opacity-[0.9]"
				title="rohy.store"
				src="/assets/logo-with-rose-color.webp"
				alt="logo-with-rose-color.webp"
				width={75}
				height={50}
				objectFit="contain"
				onClick={clickHandler}
			/>
		</div>
	);
};

export default Logo;
