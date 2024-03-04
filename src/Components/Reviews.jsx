import React from "react";
import { IoMdArrowUp } from "react-icons/io";

const Reviews = () => {
  return (
    <div className="reviews w-full pb-[200px]">
      <h1 className="text-white text-[64px] max-[1024px]:text-[40px] max-[1024px]:py-[20px] border-b-[1px] border-zinc-300 py-[32px] px-[40px] max-[1280px]:px-[20px]">
        Client's review
      </h1>

      <div className="part1 w-full bg-zinc flex max-[1024px]:flex-col max-[1024px]:gap-[20px] max-[1024px]:justify-start items-start justify-center mt-[30px]">
        <div className="w-[50%] h-full max-[1024px]:w-full max-[1024px]:h-1/2 max-[1024px]:flex-col max-[1024px]:justify-start flex items-start justify-center">
          <div className="w-[50%] h-full max-[1024px]:w-full max-[1024px]:h-1/2 pl-[40px] max-[1280px]:pl-[20px]">
            <h1 className="cursor-pointer text-white text-[16px] relative group inline-block">
              Karman Ventrues
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full max-[1024px]:w-full max-[1024px]:h-1/2 flex flex-col items-start justify-start max-[1024px]:pl-[20px]">
            <h1 className="text-white mb-[80px] max-[1024px]:mb-[15px] max-[1024px]:mt-[20px] text-[16px]">
              Services:
            </h1>

            <div className="flex flex-col max-[1024px]:flex-row justify-start items-start flex-wrap gap-[10px] max-[1024px]:gap-[5px]">
              <div className="flex group">
                <div className=" transition ease-out duration-[0.3s] startbtn cursor-pointer mr-[5px] px-[10px] py-[5px] border border-zinc-100 bg-zinc-900 group-hover:bg-zinc-50  rounded-[20px] flex justify-center items-center">
                  <h4 className=" transition ease-out duration-[0.3s] uppercase text-white group-hover:text-black  text-[13px]">
                    investor deck
                  </h4>
                </div>

                <div className="cursor-pointer w-[30px] h-[30px] max-[1024px]:hidden bg-zinc-900 rounded-[50%] relative border border-zinc-100 opacity-[0] transition ease-out duration-[0.2s] group-hover:opacity-[1]">
                  <div className="w-full h-full scale-[0] group-hover:scale-[1] bg-zinc-50 rounded-[50%] absolute  transition ease-out duration-[0.3s]"></div>
                  <IoMdArrowUp className=" transition ease-out duration-[0.3s] text-white group-hover:text-black scale-[1.3] rotate-[45deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
              </div>

              <div className="flex group">
                <div className=" transition ease-out duration-[0.3s] startbtn cursor-pointer mr-[5px] px-[10px] py-[5px] border border-zinc-100 bg-zinc-900 group-hover:bg-zinc-50  rounded-[20px] flex justify-center items-center">
                  <h4 className=" transition ease-out duration-[0.3s] uppercase text-white group-hover:text-black  text-[13px]">
                    sales deck
                  </h4>
                </div>

                <div className="cursor-pointer w-[30px] h-[30px]  max-[1024px]:hidden bg-zinc-900 rounded-[50%] relative border border-zinc-100 opacity-[0] transition ease-out duration-[0.2s] group-hover:opacity-[1]">
                  <div className="w-full h-full scale-[0] group-hover:scale-[1] bg-zinc-50 rounded-[50%] absolute  transition ease-out duration-[0.3s]"></div>
                  <IoMdArrowUp className=" transition ease-out duration-[0.3s] text-white group-hover:text-black scale-[1.3] rotate-[45deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full max-[1024px]:w-full max-[1024px]:h-1/2 ">
          <div className="w-full h-[10%] flex items-center justify-between pr-[40px] max-[1280px]:pr-[20px] max-[1024px]:pl-[20px]">
            <h1 className="text-white text-[16px]">William Barnes</h1>
            <h1 className="text-zinc-500 cursor-pointer text-[16px] uppercase">
              read
            </h1>
          </div>
          <div className="w-full h-[90%] py-[30px] pr-[200px] max-[1024px]:py-[15px] max-[1024px]:px-[20px]">
            <img
              className="w-[130px] h-[130px] max-[1024px]:w-[100px] max-[1024px]:h-[100px] rounded-[10px]"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
            <p className="text-white text-[16px] mt-[24px] max-[1024px]:mt-[15px]">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] border-t-[1px] border-zinc-300 mt-[32px]">
        <div className="w-full  h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              planetly
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              Nina waloch
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              workiz easy
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              tomer levy
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              premium blend
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              ellen kim
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              hypercare systems
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              brenden goss
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              officevide
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              raff labrie
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              orderlion
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              stefan strohmer
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              black book
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              jaci smith
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>

        <div className="w-full h-[50px] border-b-[1px] flex items-center justify-center">
          <div className="w-[50%] h-full pl-[40px] max-[1280px]:pl-[20px] flex items-center justify-start">
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block capitalize">
              trawa energy
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="w-[50%] h-full flex items-center justify-between max-[1024px]:justify-end pr-[40px] max-[1280px]:pr-[20px]">
            <h1 className="text-white text-[15px] max-[1024px]:hidden capitalize">
              david budde
            </h1>
            <h1 className="cursor-pointer text-white text-[15px] relative group inline-block uppercase">
              read
              <div className="transition-all w-full h-[1px]  bg-zinc-100 absolute top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>
      </div>

      <div className="part3 w-full flex max-[1024px]:flex-col items-center jusstify-center gap-[15px] px-[40px] max-[1280px]:px-[20px] mt-[80px]">
        <div className="relative h-[420px] w-[50%] max-[1024px]:w-[100%] bg-[#004D43] rounded-[10px] ">
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[1.5]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <div className="rounded-full border-[1px] border-[#89B65C] text-[#89B65C] inline-block text-[13px] px-[10px] py-[3px] absolute bottom-[25px] left-[25px] mr-[25px] pointer-events-none">
            2019-2022
          </div>
        </div>
        <div className="w-[683px] max-[1024px]:w-[100%] max-[576px]:flex-col flex items-center justify-between gap-[15px]">
          <div className="h-[420px] w-[50%] max-[576px]:w-[100%] bg-[#212121] rounded-[10px]  border-[1px] border-zinc-600 relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[1.5]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <div className="rounded-full border-[1px] border-white text-white bg-[#212121] transition duration-[0.5s] hover:bg-white hover:text-black inline-block text-[13px] px-[10px] py-[3px] absolute bottom-[25px] left-[25px] mr-[25px] cursor-pointer uppercase">
              rating 5.0 on clutch
            </div>
          </div>
          <div className="h-[420px] w-[50%] max-[576px]:w-[100%] bg-[#212121] rounded-[10px] border-[1px] border-zinc-600 relative">
            <img
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[0.6]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <div className="rounded-full border-[1px] border-white text-white bg-[#212121] transition duration-[0.5s] hover:bg-white hover:text-black inline-block text-[13px] px-[10px] py-[3px] absolute bottom-[25px] left-[25px] mr-[25px] cursor-pointer uppercase">
              business bootcamp alumni
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
