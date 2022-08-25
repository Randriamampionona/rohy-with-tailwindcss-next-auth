import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Intro = ({ slideData }) => {
	return (
		<section className="w-full h-auto">
			<Swiper
				slidesPerView={1}
				modules={[Pagination, Autoplay, EffectCoverflow]}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				effect="coverflow">
				{slideData.map((slider) => (
					<SwiperSlide key={slider} className="relative">
						<Image
							src={slider}
							alt={slider}
							width="1366"
							height="430.203px"
							layout="responsive"
							placeholder="blur"
							blurDataURL="/assets/logo-with-rose-color.webp"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

Intro.defaultProps = {
	slideData: ["/assets/slider1.jpeg", "/assets/slider2.jpeg"],
};

export default Intro;
