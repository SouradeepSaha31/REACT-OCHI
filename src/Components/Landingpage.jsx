import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowUp } from "react-icons/io";

const Landingpage = () => {
  const [slide1, setslide1] = useState("-100%");
  const [slide2, setslide2] = useState("-27%");
  useEffect(() => {
    setTimeout(() => {
      setslide1("0%");
      setslide2("0%");
    }, 3500);
  });
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="z-[2] landingpage pt-[100px] w-full h-screen bg-zinc-900"
    >
      <div className="bigtext overflow-hidden ml-12 max-[1280px]:ml-[20px]">
        <div
          className={`h1wraper font-[grotesk] h-[8vw] max-[1280px]:h-[80px] max-[768px]:h-[50px] flex gap-3 max-[1280px]:gap-2  justify-start  overflow-hidden`}
        >
          <h1
            className={`text-white uppercase -mt-[1.5vw] text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]`}
          >
            we create
          </h1>
        </div>

        <div
          className={`h1wraper font-[grotesk] h-[8vw] max-[1280px]:h-[80px] max-[768px]:h-[50px] flex gap-3 max-[1280px]:gap-2  justify-start  overflow-hidden`}
        >
          <img
            style={{
              transform: `translateX(${slide1})`,
              transition: "all ease-out 0.8s",
            }}
            className="w-[10vw] mt-[7px] h-[7vw] max-[1280px]:w-[100px] max-[1280px]:h-[65px] max-[768px]:w-[70px] max-[768px]:h-[45px] max-[768px]:mt-[1px] max-[768px]:rounded-[5px] rounded-[10px] object-cover object-center"
            src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
          />
          <h1
            style={{
              transform: `translateX(${slide2})`,
              transition: "all ease-out 0.8s",
            }}
            className="text-white uppercase -mt-[1.5vw] text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px] max-[350px]:text-[17vw]"
          >
            eye-opening
          </h1>
        </div>

        <div
          className={`h1wraper font-[grotesk] h-[8vw] max-[1280px]:h-[80px] max-[768px]:h-[50px] flex gap-3 max-[1280px]:gap-2  justify-start  overflow-hidden`}
        >
          <h1
            className={`text-white uppercase -mt-[1.5vw] text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]`}
          >
            presentation
          </h1>
        </div>
      </div>

      <div className="line w-full h-[1px] mt-[5vw] max-[1280px]:mt-[150px] max-[768px]:mt-[100px] bg-zinc-500"></div>

      <div className="w-full h-[12.5vw]">
        <div className="w-full h-[50%] flex items-start justify-between px-12 pt-5 max-[768px]:flex-col max-[768px]:px-[26px] max-[768px]:gap-[40px]">
          <h4 className="text-white text-[16px]">
            For public and private companies
          </h4>
          <h4 className="text-white text-[16px]">
            From the frist pitch to IPO
          </h4>

          <div className="flex group">
            <div className="transition ease-out duration-[0.3s] startbtn cursor-pointer mr-[5px] w-[175px] h-[35px] border border-zinc-100 bg-zinc-900 group-hover:bg-zinc-50  rounded-[20px] flex justify-center items-center">
              <h4 className=" transition ease-out duration-[0.3s] uppercase text-white  text-[13px] group-hover:text-black">
                start the project
              </h4>
            </div>

            <div className="cursor-pointer w-[35px] h-[35px] max-[1280px]:hidden bg-zinc-900 rounded-[50%] relative border border-zinc-100">
              <div className="w-full h-full scale-[0] group-hover:scale-[1] bg-zinc-50 rounded-[50%] absolute  transition ease-out duration-[0.3s]"></div>
              <IoMdArrowUp className=" transition ease-out duration-[0.3s] text-white text-[1vw] group-hover:text-black scale-[1.5] rotate-[45deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] flex justify-center items-end max-[1326px]:items-start pb-[1vw]">
          <div className="w-[92px] h-[17px] overflow-hidden max-[1280px]:hidden">
            {[
              "Scroll down",
              "Scroll down",
              "Scroll down",
              "Scroll down",
              "Scroll down",
            ].map((item, index) => (
              <motion.h4
                initial={{ y: "-400%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                className="text-zinc-500 pointer-events-none text-[1.2vw]"
              >
                {item}
              </motion.h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
