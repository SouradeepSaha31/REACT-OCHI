import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const About = () => {
  const [divc, setdivc] = useState(1);
  const [imgc, setimgc] = useState(1);
  const imagecolin = () => {
    setdivc(0.95);
    setimgc(1.1);
  };
  const imagecolout = () => {
    setdivc(1);
    setimgc(1);
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="z-[4] about w-full min-h-screen bg-[#CDEA68]"
    >
      <div className="part1 p-[56px] max-[1280px]:pl-[20px] border-b-[1px] border-zinc-500">
        <h1 className="text-[50px] leading-[56px] max-[1280px]:text-[40px] max-[1280px]:leading-[45px] max-[1024px]:text-[35px] max-[1024px]:leading-[40px] max-[768px]:text-[30px] max-[768px]:leading-[34px] max-[350px]:text-[25px] max-[350px]:leading-[28px] tracking-tight">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to{" "}
          <span className="cursor-pointer relative group">
            raise funds
            <div className="transition-all absolute w-full h-[3px] max-[768px]:h-[2px] max-[350px]:h-[1px] bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </span>
          ,{" "}
          <span className="cursor-pointer relative group">
            sell prod­ucts
            <div className="transition-all absolute w-full h-[3px]  max-[768px]:h-[2px] max-[350px]:h-[1px] bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </span>
          ,
          <span className="cursor-pointer relative group">
            ex­plain com­plex ideas
            <div className="transition-all absolute w-full h-[3px]  max-[768px]:h-[2px] max-[350px]:h-[1px] bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </span>
          , and{" "}
          <span className="cursor-pointer relative group">
            hire great peo­ple.
            <div className="transition-all absolute w-full h-[3px]  max-[768px]:h-[2px] max-[350px]:h-[1px] bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </span>
        </h1>
      </div>

      <div className="part2 w-full border-b-[1px] border-zinc-500 flex max-[768px]:flex-col justify-start items-start">
        <div className="left w-[50%] h-full max-[1024px]:w-[35%] max-[768px]:w-full max-[768px]:h-[10%] py-[24px] px-[56px] max-[1280px]:px-[20px]">
          <h1 className="capitalize text-[16px] max-[350px]:text-[14px]">
            what you can expect:
          </h1>
        </div>
        <div className="right w-[50%] h-full max-[1024px]:w-[65%] max-[768px]:w-full max-[768px]:h-[90%] flex justify-center items-start flex-col">
          <div className="up w-full h-1/2 py-[24px] max-[768px]:pl-[20px]">
            <div className="w-[320px] max-[350px]:w-[300px] max-[320px]:w-[100%]">
              <h1 className="capitalize text-[16px] max-[350px]:text-[14px]">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </h1>
            </div>
          </div>
          <div className="down w-full h-1/2 flex max-[768px]:flex-col max-[768px]:gap-[20px] max-[768px]:pl-[20px] justify-between items-start pr-[100px] max-[1280px]:pr-[20px] pb-[24px]">
            <div className="left w-[320px]  max-[350px]:w-[280px] max-[320px]:w-[100%]">
              <h1 className="capitalize text-[16px] max-[350px]:text-[14px]">
                We believe the mix of strategy and design with a bit of coffee
                is what makes your message clear, convincing, and captivating.
              </h1>
            </div>
            <div className="right h-full flex flex-col justify-start items-start">
              <h1 className="text-[16px] mb-[10px] max-[350px]:text-[14px]">
                S:
              </h1>
              <h1 className="cursor-pointer relative group inline-block text-[16px] max-[350px]:text-[14px]">
                Instagram
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="cursor-pointer relative group inline-block text-[16px] max-[350px]:text-[14px]">
                Behance
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="cursor-pointer relative group inline-block text-[16px] max-[350px]:text-[14px]">
                Facebook
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="cursor-pointer relative group inline-block text-[16px] max-[350px]:text-[14px]">
                Linkedin
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-900 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="part3 w-full flex justify-start items-start max-[768px]:flex-col pb-[30px] max-[768px]:pb-[0px]">
        <div className="left w-1/2 h-full max-[768px]:w-full max-[768px]:h-[10%] px-[48px] py-[10px] max-[1280px]:px-[20px]">
          <h1 className="text-[55px] tracking-tight max-[1024px]:text-[40px] max-[768px]:text-[30px]">
            Our approach:
          </h1>
          <div
            onMouseEnter={() => imagecolin()}
            onMouseLeave={() => imagecolout()}
            className="cursor-pointer mt-[10px] group w-[190px] h-[55px] max-[1024px]:w-[160px] max-[1024px]:h-[45px] bg-zinc-900 rounded-[50px] flex justify-between items-center pr-[6px] max-[1024px]:pr-[4px] pl-[24px]"
          >
            <h1 className="text-zinc-100 uppercase text-[16px] max-[1024px]:text-[13px]">
              read more
            </h1>
            <div className="bg-zinc-100 h-[45px] w-[45px] max-[1024px]:w-[40px] max-[1024px]:h-[40px] rounded-full group-hover:scale-[1] max-[1024px]:group-hover:scale-[0.9] scale-[0.2] transition ease-out duration-[0.3s] flex justify-center items-center">
              <FaArrowUp className="text-zinc-900 rotate-[45deg] opacity-[0] group-hover:opacity-[1] transition ease-out duration-[0.3s]" />
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full  max-[768px]:w-full max-[768px]:h-[90%] max-[768px]:justify-start max-[768px]:px-[20px] max-[768px]:items-center flex justify-end items-start py-[10px] pr-[48px] max-[1280px]:pr-[20px]">
          <div
            style={{ scale: `${divc}`, transition: "all ease-out 0.5s" }}
            className="imagediv w-[95%] max-[768px]:w-[100%] h-[85%] rounded-[20px] overflow-hidden"
          >
            <img
              style={{ scale: `${imgc}`, transition: "all ease-out 0.5s" }}
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              className="rounded-[20px] w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
