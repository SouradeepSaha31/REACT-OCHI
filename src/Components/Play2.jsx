import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Play2 = () => {
  const [rotate3, setrotate3] = useState(0);
  const [rotate4, setrotate4] = useState(0);
  useEffect(() => {
    const myfdiv2 = document.getElementById("myfdiv2").getBoundingClientRect();
    window.addEventListener("mousemove", (dets) => {
      if (window.innerWidth >= 768) {
        let mousex = dets.x;
        let mousey = dets.y;

        let myfdiv2x = myfdiv2.x + myfdiv2.width / 2;
        let myfdiv2y = myfdiv2.y + myfdiv2.height / 2;

        let deltax = mousex - myfdiv2x;
        let deltay = mousey - myfdiv2y;

        let angle1 = Math.atan2(deltax, deltay) * (180 / Math.PI);
        setrotate3(-(angle1 + 90));
      } else {
        setrotate3(0);
      }
    });

    const mysdiv2 = document.getElementById("mysdiv2").getBoundingClientRect();
    window.addEventListener("mousemove", (dets) => {
      if (window.innerWidth >= 768) {
        let mousex = dets.x;
        let mousey = dets.y;

        let mysdiv2x = mysdiv2.x + mysdiv2.width / 2;
        let mysdiv2y = mysdiv2.y + mysdiv2.height / 2;

        let deltax = mousex - mysdiv2x;
        let deltay = mousey - mysdiv2y;

        let angle2 = Math.atan2(deltax, deltay) * (180 / Math.PI);
        setrotate4(-(angle2 + 90));
      } else {
        setrotate4(0);
      }
    });
  });
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="play2 py-[100px] max-[1280px]:py-[85px] max-[1024px]:py-[70px]  max-[768px]:py-[55px] max-[350px]:py-[40px] relative bg-[#CDEA68] w-full"
    >
      <div className="leading-[150px] max-[1280px]:leading-[110px] max-[1024px]:leading-[90px] max-[768px]:leading-[60px] max-[350px]:leading-[45px]">
        <h1 className="big3text font-[grotesk] uppercase text-black text-[200px] max-[1280px]:text-[160px] max-[1024px]:text-[120px] max-[768px]:text-[80px] max-[350px]:text-[60px] text-center">
          ready
        </h1>
        <h1 className="big3text font-[grotesk] uppercase text-black text-[200px] max-[1280px]:text-[160px] max-[1024px]:text-[120px] max-[768px]:text-[80px] max-[350px]:text-[60px] text-center">
          to start
        </h1>
        <h1 className="big3text font-[grotesk] uppercase text-black text-[200px] max-[1280px]:text-[160px] max-[1024px]:text-[120px] max-[768px]:text-[80px] max-[350px]:text-[60px] text-center">
          the project ?
        </h1>
      </div>

      <div className="center absolute max-[550px]:mt-[18vw] max-[550px]:mb-[-10vw] max-[1280px]:mt-[100px] max-[1280px]:mb-[-50px] max-[1280px]:relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center gap-[2vw]">
        <div
          id="myfdiv2"
          className="rounded-full w-[190px] h-[190px] max-[550px]:w-[34.5vw] max-[550px]:h-[34.5vw] bg-zinc-100 relative"
        >
          <h1 className="z-[10] text-[16px] max-[550px]:text-[2.95vw] text-zinc-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            PLAY
          </h1>
          <div className="flex justify-center items-center rotate-[0deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%] h-[65%] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `rotate(${rotate3}deg)` }}
              className="w-full"
            >
              <div className="w-[19px] h-[19px] max-[550px]:w-[3.45vw] max-[550px]:h-[3.45vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div
          id="mysdiv2"
          className="rounded-full w-[190px] h-[190px] max-[550px]:w-[34.5vw] max-[550px]:h-[34.5vw] bg-zinc-100 relative"
        >
          <h1 className="z-[10] text-[16px] max-[550px]:text-[2.95vw] text-zinc-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            PLAY
          </h1>
          <div className="flex justify-center items-center rotate-[0deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%] h-[65%] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `rotate(${rotate4}deg)` }}
              className="w-full"
            >
              <div className="w-[19px] h-[19px] max-[550px]:w-[3.45vw] max-[550px]:h-[3.45vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative left-[50%] translate-x-[-50%] cursor-pointer group w-[230px] h-[55px] max-[550px]:w-[190px] max-[550px]:h-[45px] bg-zinc-900 rounded-[50px] flex justify-between items-center max-[550px]:pl-[15px] pr-[6px] pl-[20px]">
        <h1 className="text-zinc-100 uppercase text-[13px] max-[550px]:text-[11px]">
          start the project
        </h1>
        <div className="bg-zinc-100 h-[42px] w-[42px] max-[550px]:w-[35px] max-[550px]:h-[35px] rounded-full group-hover:scale-[1] scale-[0.2] transition ease-out duration-[0.3s] flex justify-center items-center">
          <FaArrowUp className="text-zinc-900 rotate-[45deg] text-[16px] max-[550px]:text-[14px] opacity-[0] group-hover:opacity-[1] transition ease-out duration-[0.3s]" />
        </div>
      </div>

      <h1 className="uppercase text-black text-[16px] max-[550px]:text-[14px] max-[550px]:my-[10px] text-center my-[14px]">
        or
      </h1>

      <div className="relative left-[50%] translate-x-[-50%] cursor-pointer group transition ease-out duration-[0.5s] w-[230px] h-[55px] max-[550px]:w-[190px] max-[550px]:h-[45px] bg-transparent border-[1px] border-black group hover:bg-black rounded-[50px] flex justify-between items-center max-[550px]:pl-[15px] max-[550px]:pr-[4px] pr-[6px] pl-[20px]">
        <h1 className="text-zinc-900 group-hover:text-white uppercase text-[13px] max-[550px]:text-[11px] transition ease-out duration-[0.5s] ">
          hello@ochi.design
        </h1>
        <div className="bg-zinc-900 h-[42px] w-[42px] max-[550px]:w-[35px] max-[550px]:h-[35px] rounded-full group-hover:scale-[1] group-hover:bg-zinc-100 scale-[0.2] transition ease-out duration-[0.5s] flex justify-center items-center">
          <FaArrowUp className="text-zinc-900 rotate-[45deg] text-[16px] max-[550px]:text-[14px] opacity-[0] group-hover:opacity-[1] transition ease-out duration-[0.5s]" />
        </div>
      </div>
    </div>
  );
};

export default Play2;
