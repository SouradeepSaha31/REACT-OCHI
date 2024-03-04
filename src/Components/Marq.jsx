import React from "react";
import { motion } from "framer-motion";

const Marq = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="z-[3] marquee w-full h-[30vw] bg-[#004D43] rounded-t-[20px] overflow-hidden flex items-center"
    >
      <div className="inmarq w-full h-[20vw] whitespace-nowrap overflow-hidden  border-y-[1px] border-zinc-50 flex gap-7 justify-start px-2">
        {[
          "we are ochi we are ochi we are ochi we are ochi we are ochi",
          "we are ochi we are ochi we are ochi we are ochi we are ochi",
        ].map((item, index) => (
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="uppercase 
                text-[25vw] 
                text-zinc-100 
                mt-[-4vw] 
                tracking-[-0.4vw]"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marq;
