import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";
import ford from "../assets/icons/brands/ford.svg";
import mercedes from "../assets/icons/brands/mercedes.svg";
import audi from "../assets/icons/brands/audi.svg";
import bmw from "../assets/icons/brands/bmw.svg";
import vw from "../assets/icons/brands/vw.svg";
import mazda from "../assets/icons/brands/mazda.svg";
import skoda from "../assets/icons/brands/skoda.svg";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        {/* brand wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <img src={ford} alt="ford" className="w-[65px] h-[32px]" />
          </div>
          <div>
            <img src={mercedes} alt="mercedes" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={audi} alt="audi" className="w-[65px] h-[32px]" />
          </div>
          <div>
            <img src={bmw} alt="bmw" className="w-[60x] h-[60px]" />
          </div>
          <div>
            <img src={vw} alt="vw" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={skoda} alt="skoda" className="w-[60px] h-[60px]" />
          </div>
          <div>
            <img src={mazda} alt="mazda" className="w-[62px] h-[50px]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
