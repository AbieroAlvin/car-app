import { FaPhone, FaEnvelope } from " react-icons/fa6";

import Copyright from "./Copyright";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="pt-20 bg-white z-20">
      <div className="container mx-auto mb-24">
        {/* grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
