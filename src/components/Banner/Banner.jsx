import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="w-full  h-[80vh] bg-gray-100 mb-10 z-10 rounded-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full rounded-lg z-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full z-10 rounded-lg">
            <img
              src="https://i.ibb.co.com/3Y9wkDQ/premium-kashmir-willow-full-kit-with-spolfy-stump-and-ultimate-original-imag6q482qja5zk9.webp"
              alt="Career Counseling"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Cricket Equipment
              </h1>
              <p className="text-white text-lg md:text-2xl mb-6">
                High-quality cricket gear tailored for all levels.
              </p>
              <Link
                to={`/`}
                className=" btn mt-4 border-none bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full z-10 rounded-lg">
            <img
              src="https://i.ibb.co.com/yFDQCxx/soccer-boots-and-ball.jpg"
              alt="Expert Guidance"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Football Gear
              </h1>
              <p className="text-white text-lg md:text-2xl mb-6">
                Top-notch footballs, shoes, and accessories for matches.
              </p>
              <Link
                to={`/`}
                className=" btn mt-4 border-none bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full z-10 rounded-lg">
            <img
              src="https://i.ibb.co.com/fnZ9M47/61-DVwva0-d-L-AC-UF894-1000-QL80.jpg"
              alt="Join Us"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                Hockey Essentials
              </h1>
              <p className="text-white text-lg md:text-2xl mb-6">
                Premium hockey sticks, pucks, and safety gear.
              </p>
              <Link
                to={`/`}
                className=" btn mt-4 border-none bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
