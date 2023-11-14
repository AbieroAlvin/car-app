import { motion } from "framer-motion";

import { fadeIn } from "/variants";
import phone from "../assets/images/cta/phone.svg";
import googlePlay from "../assets/icons/buttons/google-play.svg";
import appStore from "../assets/icons/buttons/app-store.svg";

const Cta = () => {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 xl:px-[40px] px-[20px]"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className="flex xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="xl:mb-6 mb-3"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                accusamus repellat repudiandae modi eveniet accusantium neque
                aspernatur, culpa quaerat sed!
              </motion.p>
              {/* btns */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className="btn-cta">
                  <img
                    src={googlePlay}
                    alt="google-play"
                    width={132}
                    height={36}
                  />
                </button>
                <button className="btn-cta">
                  <img src={appStore} alt="app-store" width={132} height={36} />
                </button>
              </motion.div>
            </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex justify-center order-1 md:order-none"
          >
            <img src={phone} alt="phone" width={320} height={640} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
