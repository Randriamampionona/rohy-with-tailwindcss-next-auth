import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const List = ({ text, data }) => {
	return (
		<div>
			<h1>{text}</h1>

			<div className="w-auto h-auto md:">
				<Swiper
					slidesPerView={2.3}
					spaceBetween={2}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 6.3,
							spaceBetween: 50,
						},
					}}>
					{data?.map((movie) => (
						<SwiperSlide key={movie.id}>
							<div className="relative w-48 h-24 cursor-pointer hover:contrast-75 filter overflow-hidden">
								<Image
									src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
									alt={movie.title}
									layout="fill"
									objectFit="cover"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default List;
