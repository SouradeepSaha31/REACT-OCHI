import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Featured = () => {
  const [hovering1, sethovering1] = useState(false);
  const [hovering2, sethovering2] = useState(false);
  const [hovering3, sethovering3] = useState(false);
  const [hovering4, sethovering4] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      className="Featured w-full min-h-screen bg-black"
    >
      <h1 className="text-white text-[60px] max-[1024px]:text-[40px] border-b-[1px] border-zinc-300 py-[20px] px-[20px]">
        Featured project
      </h1>

      <div className="w-full  relative flex justify-center items-start mt-[40px] max-[768px]:flex-col max-[768px]:justify-start max-[768px]:items-center max-[768px]:gap-[20px]">
        <div className="h-[10vw] overflow-hidden absolute mt-[17.5vw] z-[10] pointer-events-none max-[768px]:hidden">
          <h1 className="animetext font-[grotesk] uppercase text-[#CDEA68] text-[10vw]">
            {["f", "y", "d", "e"].map((item, index) => (
              <motion.span
                initial={{ y: "55%" }}
                animate={hovering1 ? { y: "0%" } : { y: "55%" }}
                transition={{ delay: index * 0.03 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="h-[10vw] overflow-hidden absolute mt-[17.5vw] z-[10] pointer-events-none max-[768px]:hidden">
          <h1 className="animetext font-[grotesk] uppercase text-[#CDEA68] text-[10vw]">
            {["v", "i", "s", "e"].map((item, index) => (
              <motion.span
                initial={{ y: "55%" }}
                animate={hovering2 ? { y: "0%" } : { y: "55%" }}
                transition={{ delay: index * 0.03 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="w-1/2 h-full max-[768px]:w-full max-[768px]:h-1/2 flex flex-col justify-start items-center">
          <div className="w-full h-[5%] flex items-center justify-start gap-[8px] px-[20px] py-[10px] max-[768px]:py-[15px]">
            <div className="w-[10px] h-[10px] bg-zinc-100 rounded-full"></div>
            <h1 className="text-[16px] text-white">FYDE</h1>
          </div>
          <div
            onMouseEnter={() => sethovering1(true)}
            onMouseLeave={() => sethovering1(false)}
            className="w-full h-[85%] px-[5px] max-[768px]:px-[8px] flex items-center justify-center group"
          >
            <div className="w-[95%] h-[95%] overflow-hidden rounded-[10px] scale-[1] group-hover:scale-[0.95] transition ease duration-[0.5s]">
              <img
                className="w-full h-full rounded-[10px] scale-[1] group-hover:scale-[1.2] transition ease duration-[0.5s]"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex flex-wrap items-start justify-start px-[20px] max-[768px]:px-[22px] py-[10px] gap-[10px]">
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              AUDIT
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              copywriting
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              sales deck
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              slides design
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full max-[768px]:w-full max-[768px]:h-1/2 flex flex-col justify-start items-center">
          <div className="w-full h-[5%] flex items-center justify-start gap-[8px] px-[20px] py-[10px] max-[768px]:py-[15px]">
            <div className="w-[10px] h-[10px] bg-zinc-100 rounded-full"></div>
            <h1 className="text-[16px] text-white uppercase">vise</h1>
          </div>
          <div
            onMouseEnter={() => sethovering2(true)}
            onMouseLeave={() => sethovering2(false)}
            className="w-full h-[85%] px-[5px] max-[768px]:px-[8px] flex items-center justify-center group"
          >
            <div className="w-[95%] h-[95%] overflow-hidden rounded-[10px] border-[1px] border-zinc-500  scale-[1] group-hover:scale-[0.95] transition ease duration-[0.5s]">
              <img
                className="w-full h-full rounded-[10px] scale-[1] group-hover:scale-[1.2] transition ease duration-[0.5s]"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex flex-wrap items-start justify-start px-[20px] max-[768px]:px-[22px] py-[10px] gap-[10px]">
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              agency
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              company presentation
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-start mt-[45px] max-[768px]:mt-[20px] max-[768px]:flex-col max-[768px]:justify-start max-[768px]:items-center max-[768px]:gap-[20px]">
        <div className="h-[10vw] overflow-hidden absolute mt-[17.5vw] z-[10] pointer-events-none max-[768px]:hidden">
          <h1 className="animetext font-[grotesk] uppercase text-[#CDEA68] text-[10vw]">
            {["t", "r", "a", "w", "a"].map((item, index) => (
              <motion.span
                initial={{ y: "55%" }}
                animate={hovering3 ? { y: "0%" } : { y: "55%" }}
                transition={{ delay: index * 0.03 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="h-[10vw] overflow-hidden absolute mt-[17.5vw] z-[10] pointer-events-none max-[768px]:hidden">
          <h1 className="animetext font-[grotesk] uppercase text-[#CDEA68] text-[10vw]">
            {[
              "p",
              "r",
              "e",
              "m",
              "m",
              "i",
              "u",
              "m",
              "b",
              "l",
              "e",
              "n",
              "d",
            ].map((item, index) => (
              <motion.span
                initial={{ y: "55%" }}
                animate={hovering4 ? { y: "0%" } : { y: "55%" }}
                transition={{ delay: index * 0.01 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="w-1/2 h-full max-[768px]:w-full max-[768px]:h-1/2 flex flex-col justify-start items-center">
          <div className="w-full h-[5%] flex items-center justify-start gap-[8px] px-[20px] py-[10px] max-[768px]:py-[15px]">
            <div className="w-[10px] h-[10px] bg-zinc-100 rounded-full"></div>
            <h1 className="text-[16px] text-white uppercase">trawa</h1>
          </div>
          <div
            onMouseEnter={() => sethovering3(true)}
            onMouseLeave={() => sethovering3(false)}
            className="w-full px-[5px] max-[768px]:px-[8px] h-[85%] flex items-center justify-center group"
          >
            <div className="w-[95%] h-[95%] overflow-hidden rounded-[10px] scale-[1] group-hover:scale-[0.95] transition ease duration-[0.5s]">
              <img
                className="w-full h-full rounded-[10px] scale-[1] group-hover:scale-[1.2] transition ease duration-[0.5s]"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex flex-wrap items-start justify-start px-[20px] max-[768px]:px-[22px] py-[10px] gap-[10px]">
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              brand identity
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              deisgn research
            </div>
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              investor deck
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full max-[768px]:w-full max-[768px]:h-1/2 flex flex-col justify-start items-center">
          <div className="w-full h-[5%] flex items-center justify-start gap-[8px] px-[20px] py-[10px] max-[768px]:py-[15px]">
            <div className="w-[10px] h-[10px] bg-zinc-100 rounded-full"></div>
            <h1 className="text-[16px] text-white uppercase">premium blend</h1>
          </div>
          <div
            onMouseEnter={() => sethovering4(true)}
            onMouseLeave={() => sethovering4(false)}
            className="w-full h-[85%] px-[5px] max-[768px]:px-[8px] flex items-center justify-center group"
          >
            <div className="w-[95%] h-[95%] overflow-hidden rounded-[10px] border-[1px] border-zinc-500  scale-[1] group-hover:scale-[0.95] transition ease duration-[0.5s]">
              <img
                className="w-full h-full rounded-[10px] scale-[1] group-hover:scale-[1.2] transition ease duration-[0.5s]"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex flex-wrap items-start justify-start px-[20px] max-[768px]:px-[22px] py-[10px] gap-[10px]">
            <div className="transition linear duration-[0.5s] px-[10px] py-[5px] uppercase text-white bg-zinc-900 text-[13px] cursor-pointer border-[1.5px] border-white rounded-[50px] hover:bg-zinc-100 hover:text-zinc-900">
              branded template
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[140px] bg-zinc-900 flex justify-center items-center">
        <div className="cursor-pointer group w-[280px] h-[50px] bg-zinc-100 rounded-[50px] flex justify-between items-center pr-[6px] pl-[22px]">
          <h1 className="text-zinc-900 text-[16px] uppercase">
            view all case studies
          </h1>
          <div className="bg-zinc-900 h-[40px] w-[40px] rounded-full group-hover:scale-[1] scale-[0.2] transition ease-out duration-[0.3s] flex justify-center items-center">
            <FaArrowUp className="text-zinc-100 text-[16px] rotate-[45deg] opacity-[0] group-hover:opacity-[1] transition ease-out duration-[0.3s]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
