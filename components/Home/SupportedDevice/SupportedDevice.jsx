import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const SupportedDevice = () => {
	return (
		<section className="w-full h-auto py-[4rem]">
			<div className="flex flex-col items-center auto-spacing space-y-[1rem]">
				<h1 className="text-center text-whiteColor font-[600] text-2xl uppercase">
					Disponible sur tout support
				</h1>
				<p className="text-center sm:w-[80%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reiciendis incidunt consequatur rerum placeat asperiores
					excepturi. Ad, voluptatum! Modi ab cum odit perspiciatis
					architecto, laudantium quam dolorum nemo velit hic eaque
					rerum maiores voluptatibus, labore quibusdam provident.
					Laborum dicta velit voluptates repellat totam aliquam unde
					mollitia tempore error quibusdam delectus voluptas obcaecati
					recusandae minima vero, cupiditate eaque earum sunt!
					Eligendi, quos! Ipsam magnam amet cupiditate. Nulla hic
					minima amet facere. Numquam autem consequatur maiores quae
					magnam!
				</p>

				<Image
					src="/assets/device.webp"
					alt="Device"
					width={"765px"}
					height={"391px"}
					loading="lazy"
					placeholder="blur"
					blurDataURL="/assets/logo-with-rose-color.webp"
				/>

				<button className="btn">
					<span>Telecharger</span>
					<FiDownload />
				</button>
			</div>
		</section>
	);
};

export default SupportedDevice;
