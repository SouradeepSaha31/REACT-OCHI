import React, { useEffect, useState } from "react";

const navbar = () => {
  const [mtop1, setmtop1] = useState("-15%");
  const [mtop2, setmtop2] = useState("-15%");
  const [mtop3, setmtop3] = useState("-15%");
  const [mtop4, setmtop4] = useState("-15%");
  const [mtop5, setmtop5] = useState("-15%");

  const [height, setheight] = useState("0px");
  const [flag, setflag] = useState(true);
  const [opacity, setopacity] = useState(0);
  const [top1, settop1] = useState("30%");
  const [top2, settop2] = useState("70%");
  const [rotate1, setrotate1] = useState("0");
  const [rotate2, setrotate2] = useState("0");

  useEffect(() => {
    document.getElementById("click").addEventListener("click", () => {
      if (flag) {
        setheight("520px");
        setopacity(1);
        settop1("50%");
        settop2("50%");
        setrotate1("45");
        setrotate2("-45");
        setflag(false);
      } else {
        setopacity(0);
        setheight("0px");
        setrotate1("0");
        setrotate2("0");
        settop1("30%");
        settop2("70%");
        setflag(true);
      }
    });
  });

  return (
    <nav className="z-[99] absolute w-full">
      <div className="z-[200] bg-zinc-900 relative w-full h-[80px] px-[40px] max-[1280px]:px-[20px] flex justify-between items-center">
        <div className="logo">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
              fill="white"
            ></path>
            <path
              d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
              fill="white"
            ></path>
            <path
              d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
              fill="white"
            ></path>
            <path
              d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
              fill="white"
            ></path>
            <path
              d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="toplinks flex justify-between items-center gap-10 text-[1.2vw] text-white">
          <div
            onMouseEnter={() => setmtop1("-130%")}
            onMouseLeave={() => setmtop1("-15%")}
            className=" cursor-pointer overflow-hidden h-[20px] relative group"
          >
            <div className="transition-all duration-[400ms] absolute w-[0] h-[1px]  bg-zinc-100 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            <a
              style={{ position: "relative", top: `${mtop1}` }}
              className="transition-all duration-[400ms] text-white text-[14px] capitalize max-[1000px]:hidden"
            >
              services
            </a>
            <a
              style={{ position: "relative", top: `${mtop1}` }}
              className="transition-all duration-[400ms] text-white block text-[14px] capitalize max-[1000px]:hidden"
            >
              services
            </a>
          </div>
          <div
            onMouseEnter={() => setmtop2("-130%")}
            onMouseLeave={() => setmtop2("-15%")}
            className=" cursor-pointer overflow-hidden h-[20px] relative group"
          >
            <div className="transition-all duration-[400ms] absolute w-[0] h-[1px]  bg-zinc-100 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            <a
              style={{ position: "relative", top: `${mtop2}` }}
              className="transition-all duration-[400ms] text-white text-[14px] capitalize max-[1000px]:hidden"
            >
              our work
            </a>
            <a
              style={{ position: "relative", top: `${mtop2}` }}
              className="transition-all duration-[400ms] text-white block text-[14px] capitalize max-[1000px]:hidden"
            >
              our work
            </a>
          </div>
          <div
            onMouseEnter={() => setmtop3("-130%")}
            onMouseLeave={() => setmtop3("-15%")}
            className=" cursor-pointer overflow-hidden h-[20px] relative group"
          >
            <div className="transition-all duration-[400ms] absolute w-[0] h-[1px]  bg-zinc-100 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            <a
              style={{ position: "relative", top: `${mtop3}` }}
              className="transition-all duration-[400ms] text-white text-[14px] capitalize max-[1000px]:hidden"
            >
              about us
            </a>
            <a
              style={{ position: "relative", top: `${mtop3}` }}
              className="transition-all duration-[400ms] text-white block text-[14px] capitalize max-[1000px]:hidden"
            >
              about us
            </a>
          </div>
          <div
            onMouseEnter={() => setmtop4("-130%")}
            onMouseLeave={() => setmtop4("-15%")}
            className=" cursor-pointer overflow-hidden h-[20px] relative group"
          >
            <div className="transition-all duration-[400ms] absolute w-[0] h-[1px]  bg-zinc-100 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            <a
              style={{ position: "relative", top: `${mtop4}` }}
              className="transition-all duration-[400ms] text-white text-[14px] capitalize max-[1000px]:hidden"
            >
              insights
            </a>
            <a
              style={{ position: "relative", top: `${mtop4}` }}
              className="transition-all duration-[400ms] text-white block text-[14px] capitalize max-[1000px]:hidden"
            >
              insights
            </a>
          </div>
          <div
            onMouseEnter={() => setmtop5("-130%")}
            onMouseLeave={() => setmtop5("-15%")}
            className=" cursor-pointer overflow-hidden h-[20px] relative group ml-32"
          >
            <div className="transition-all duration-[400ms] absolute w-[0] h-[1px]  bg-zinc-100 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            <a
              style={{ position: "relative", top: `${mtop5}` }}
              className="transition-all duration-[400ms] text-white text-[14px] capitalize max-[1000px]:hidden"
            >
              contact us
            </a>
            <a
              style={{ position: "relative", top: `${mtop5}` }}
              className="transition-all duration-[400ms] text-white block text-[14px] capitalize max-[1000px]:hidden"
            >
              contact us
            </a>
          </div>
        </div>

        <div
          id="click"
          className="absolute right-[20px] w-[30px] h-[20px] hidden max-[1000px]:block"
        >
          <div
            style={{
              position: "absolute",
              top: `${top1}`,
              transform: `rotate(${rotate1}deg)`,
              transition: "all ease 0.3s",
            }}
            className="line1 w-full h-[1.5px] bg-white"
          ></div>
          <div
            style={{
              position: "absolute",
              top: `${top2}`,
              transform: `rotate(${rotate2}deg)`,
              transition: "all ease 0.3s",
            }}
            className="line2 w-full h-[1.5px] bg-white"
          ></div>
        </div>
      </div>

      <div
        style={{ height: `${height}`, transition: "all ease 0.8s" }}
        className="w-full overflow-hidden bg-zinc-900 px-[40px] max-[1280px]:px-[20px] pt-[15px] leading-[120px]"
      >
        <h1
          style={{ opacity: `${opacity}`, transition: "all ease 1.6s" }}
          className="resnav cursor-pointer h-[100px] max-[1280px]:h-[90px] max-[768px]:h-[70px] text-zinc-100 uppercase text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]"
        >
          services
        </h1>
        <h1
          style={{ opacity: `${opacity}`, transition: "all ease 1.6s" }}
          className="resnav cursor-pointer h-[100px] max-[1280px]:h-[90px] max-[768px]:h-[70px] text-zinc-100 uppercase text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]"
        >
          our work
        </h1>
        <h1
          style={{ opacity: `${opacity}`, transition: "all ease 1.6s" }}
          className="resnav cursor-pointer h-[100px] max-[1280px]:h-[90px] max-[768px]:h-[70px] text-zinc-100 uppercase text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]"
        >
          about us
        </h1>
        <h1
          style={{ opacity: `${opacity}`, transition: "all ease 1.6s" }}
          className="resnav cursor-pointer h-[100px] max-[1280px]:h-[90px] max-[768px]:h-[70px] text-zinc-100 uppercase text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]"
        >
          insights
        </h1>
        <h1
          style={{ opacity: `${opacity}`, transition: "all ease 1.6s" }}
          className="resnav cursor-pointer h-[100px] max-[1280px]:h-[90px] max-[768px]:h-[70px] text-zinc-100 uppercase text-[10vw] max-[1280px]:text-[100px] max-[768px]:text-[60px]"
        >
          contact us
        </h1>
      </div>
    </nav>
  );
};

export default navbar;
