import React, { useEffect, useRef, useState } from "react";

const Play = () => {
  const [rotate1, setrotate1] = useState(0);
  const [rotate2, setrotate2] = useState(0);
  useEffect(() => {
    const myfdiv = document.getElementById("myfdiv").getBoundingClientRect();
    window.addEventListener("mousemove", (dets) => {
      if (window.innerWidth >= 768) {
        let mousex = dets.x;
        let mousey = dets.y;

        let myfdivx = myfdiv.x + myfdiv.width / 2;
        let myfdivy = myfdiv.y + myfdiv.height / 2;

        let deltax = mousex - myfdivx;
        let deltay = mousey - myfdivy;

        let angle1 = Math.atan2(deltax, deltay) * (180 / Math.PI);
        setrotate1(-(angle1 + 90));
      } else {
        setrotate1(0);
      }
    });

    const mysdiv = document.getElementById("mysdiv").getBoundingClientRect();
    window.addEventListener("mousemove", (dets) => {
      if (window.innerWidth >= 768) {
        let mousex = dets.x;
        let mousey = dets.y;

        let mysdivx = mysdiv.x + mysdiv.width / 2;
        let mysdivy = mysdiv.y + mysdiv.height / 2;

        let deltax = mousex - mysdivx;
        let deltay = mousey - mysdivy;

        let angle2 = Math.atan2(deltax, deltay) * (180 / Math.PI);
        setrotate2(-(angle2 + 90));
      } else {
        setrotate2(0);
      }
    });
  });
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.05"
      className='z-[0] play relative w-full h-[55vw] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'
    >
      <div className="center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center gap-[2vw]">
        <div
          id="myfdiv"
          className="w-[190px] h-[190px] rounded-full max-[550px]:w-[34.5vw] max-[550px]:h-[34.5vw] bg-zinc-100 relative"
        >
          <h1 className="z-[10] text-[16px] max-[550px]:text-[2.95vw] text-zinc-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            PLAY
          </h1>
          <div className="flex justify-center items-center rotate-[0deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%] h-[65%] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `rotate(${rotate1}deg)` }}
              className="w-full"
            >
              <div className="w-[19px] h-[19px] max-[550px]:w-[3.45vw] max-[550px]:h-[3.45vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div
          id="mysdiv"
          className="rounded-full w-[190px] h-[190px] max-[550px]:w-[34.5vw] max-[550px]:h-[34.5vw] bg-zinc-100 relative"
        >
          <h1 className="z-[10] text-[16px] max-[550px]:text-[2.95vw] text-zinc-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            PLAY
          </h1>
          <div className="flex justify-center items-center rotate-[0deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%] h-[65%] bg-zinc-900 rounded-full">
            <div
              style={{ transform: `rotate(${rotate2}deg)` }}
              className="w-full"
            >
              <div className="w-[19px] h-[19px] max-[550px]:w-[3.45vw] max-[550px]:h-[3.45vw] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
