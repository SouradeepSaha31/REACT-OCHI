import React from "react";

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="footer pb-[30px] pt-[130px] max-[380px]:pb-[0px] max-[380px]:pt-[60px] w-full h-[120vh] max-[768px]:h-[150vh] max-[380px]:h-[140vh] bg-black flex max-[768px]:flex-col max-[768px]:justify-start items-start justify-center rounded-t-[20px]"
    >
      <div className="h-full w-[50%] max-[1280px]:w-[40%] max-[768px]:w-[100%] max-[768px]:h-[55%] max-[380px]:h-[50%] relative">
        <div className="leading-[100px] max-[768px]:leading-[55px] max-[380px]:leading-[40px] max-[1280px]:leading-[80px] max-[1024px]:leading-[70px]  max-[1280px]:m-[20px] m-[40px]">
          <h1 className="footertext uppercase text-white text-[140px] max-[1280px]:text-[110px] max-[1024px]:text-[90px] max-[768px]:text-[70px] max-[380px]:text-[50px]">
            eye-
          </h1>
          <h1 className="footertext uppercase text-white text-[140px] max-[1280px]:text-[110px] max-[1024px]:text-[90px] max-[768px]:text-[70px] max-[380px]:text-[50px]">
            opening
          </h1>
          <h1 className="footertext max-[768px]:block uppercase text-white text-[140px] max-[1280px]:text-[110px] max-[1024px]:text-[90px] max-[768px]:text-[70px] max-[380px]:text-[50px] hidden">
            presentations
          </h1>
        </div>
        <div className="items-start pl-[40px] max-[1280px]:pl-[20px] justify-start gap-[30px] hidden max-[768px]:flex">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[16px] text-white mb-[10px] text-right">M:</h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              Home
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              Services
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              Our work
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              About us
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              Insights
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
              Contact us
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-[16px] text-white mb-[10px]">S:</h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              Instagram
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              Behance
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              Facebook
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              Linkedin
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
          </div>
        </div>
        <svg
          className="absolute max-[768px]:hidden bottom-[8px] left-[40px] max-[1280px]:left-[20px] scale-[1.2]"
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
      <div className="relative h-full w-[50%] max-[1280px]:w-[60%] max-[768px]:w-[100%] max-[768px]:h-[45%] max-[380px]:h-[45%]">
        <h1 className="footertext max-[768px]:hidden uppercase text-white text-[140px] max-[1280px]:text-[110px] max-[1024px]:text-[90px] max-[1280px]:leading-[130px] max-[1024px]:leading-[110px] leading-[170px]">
          presentation
        </h1>
        <div className="flex max-[768px]:hidden flex-col items-start justify-start mb-[25px]">
          <h1 className="text-[16px] text-white mb-[10px]">S:</h1>
          <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
            Instagram
            <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </h1>
          <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
            Behance
            <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </h1>
          <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
            Facebook
            <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </h1>
          <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
            Linkedin
            <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
          </h1>
        </div>

        <div className="absolute bottom-0 w-full flex items-end justify-start max-[768px]:pl-[20px]">
          <div className="w-[50%] max-[768px]:w-full flex flex-col items-start justify-start">
            <h1 className="text-[16px] text-white mb-[10px]">L:</h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              202-1965 W 4th Ave
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              Vancouver, Canada
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="cursor-pointer relative group inline-block text-white text-[16px]">
              30 Chukarina St
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>
            <h1 className="mb-[20px] cursor-pointer relative group inline-block text-white text-[16px]">
              Lviv, Ukraine
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>

            <h1 className="mb-[10px] text-[16px] text-white">E:</h1>
            <h1 className="cursor-pointer mb-[35px] max-[768px]:mb-[20px] relative group inline-block text-white text-[16px]">
              hello@ochi.design
              <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
            </h1>

            <svg
              className="hidden max-[768px]:block mb-[25px] max-[768px]:mb-[20px] ml-[10px] scale-[1.2]"
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

            <div>
              <h1 className="inline-block text-zinc-500 text-[16px]">
                ochi design 2024
              </h1>{" "}
              <h1 className="cursor-pointer relative group inline-block text-zinc-500 text-[16px]">
                Legal Terms
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-500 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
            </div>
            <h1 className="hidden max-[768px]:block text-left cursor-pointer relative group text-zinc-500 text-[16px]">
              Website by Obys
              <div className="transition-all absolute w-[0] h-[1px]  bg-zinc-500 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
            </h1>
          </div>

          <div className="w-[50%] max-[768px]:hidden flex items-end justify-end pr-[32px]">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-[16px] text-white mb-[10px] text-right">
                M:
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
                Home
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
                Services
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
                Our work
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
                About us
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-white text-[16px]">
                Insights
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left mb-[65px] cursor-pointer relative group inline-block text-white text-[16px]">
                Contact us
                <div className="transition-all absolute w-full h-[1px]  bg-zinc-100 top-[95%] left-[0] group-hover:w-[0] group-hover:left-[50%]"></div>
              </h1>
              <h1 className="text-left cursor-pointer relative group inline-block text-zinc-500 text-[16px]">
                Website by Obys
                <div className="transition-all absolute w-[0] h-[1px]  bg-zinc-500 top-[95%] left-[50%] group-hover:w-full group-hover:left-[0%]"></div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
