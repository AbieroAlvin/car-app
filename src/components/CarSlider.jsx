import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import "swiper/css";
// cars
import car1 from "../assets/images/carSlider/car01.svg";
import car2 from "../assets/images/carSlider/car02.svg";
import car3 from "../assets/images/carSlider/car03.svg";

// icons
import gearshift from "../assets/icons/carSlider/gearshift.svg";
import seat from "../assets/icons/carSlider/seat.svg";
import gas from "../assets/icons/carSlider/gas.svg";
import engine from "../assets/icons/carSlider/engine.svg";
import wheel from "../assets/icons/carSlider/wheel.svg";

// variants
import { fadeIn } from "/variants";

// car data
const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: car1,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: car2,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: car3,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: car3,
    info: [
      {
        icon: gearshift,
        text: "Manual",
      },
      {
        icon: seat,
        text: "5 Seats",
      },
      {
        icon: gas,
        text: "Gas",
      },
      {
        icon: engine,
        text: "1600 HP",
      },
      {
        icon: wheel,
        text: "Front",
      },
    ],
  },
];

const CarSlider = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto "
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-100 p-4 rounded-md">
                <img src={car.image} alt="/" className="w-[380px] h-[284px]" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <h3 className="mb-10 text-accent font-semibold uppercase">
                      {car.price}/day
                    </h3>
                  </div>
                  {/* stars */}
                  <div className="flex gap-x-8 text-accent h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <img
                            src={item.icon}
                            alt="/"
                            className="w-[24px] h-[24px]"
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-accent btn-lg">See details</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarSlider;
