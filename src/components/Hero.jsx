import Search from "./Search";

import { useSearchContext } from "../context/SearchContext";

import GooglePlay from "../assets/icons/buttons/google-play.svg";
import AppStore from "../assets/icons/buttons/app-store.svg";
import Car from "../assets/images/hero/car.svg";

import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "/variants";

const Hero = () => {
  const { searchActive } = useSearchContext();
  return (
    <section className="section h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="mx-auto h-full">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1"
            >
              Explore the Finest <span className="text-accent">Global</span>{" "}
              Offers
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependable car rentals.
            </motion.p>
            {/* btns */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              {/* btn appstore */}
              <button className="btn-cta">
                <img
                  src={AppStore}
                  alt="appstore"
                  className="w-[132px] h-[36px]"
                />
              </button>
              {/* btn google */}
              <button className="btn-cta">
                <img
                  src={GooglePlay}
                  alt="googleplay"
                  className="w-[132px] h-[36px]"
                />
              </button>
            </motion.div>
          </div>
          {/* img car */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[50vw] xl:max-w-[760px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <img
              src={Car}
              alt="car"
              className="object-cover xl:max-w-[700px] xl:max-h-[700px] px-10"
            />
          </motion.div>
        </div>
      </div>
      {searchActive ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
