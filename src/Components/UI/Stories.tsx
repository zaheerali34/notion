import LogoCard from "./LogoCard";

function Stories() {
  return (
    <div className="w-full h-full py-8 px-25">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="1em"
          className="NotionIconSvgWrapper_icon__In1uC bg-gray-200 w-[30px] rounded-md"
        >
          <defs fill="currentColor"></defs>
          <path
            d="m32,8c-14.81,0-24,8.43-24,22,0,6.92,2.4,12.49,6.7,16.3l-6.7,6.7,2,3c5.42,0,10.43-1.8,14.45-4.84,2.32.55,4.84.84,7.55.84,14.81,0,24-8.43,24-22s-9.19-22-24-22Zm0,8c4.94,0,8,3.06,8,8s-3.06,8-8,8-8-3.06-8-8,3.06-8,8-8Zm0,30c-5.6,0-10.03-1.41-13.09-4.03,2.72-3.81,7.24-5.97,13.09-5.97s10.37,2.16,13.09,5.97c-3.06,2.62-7.49,4.03-13.09,4.03Z"
            fill="currentColor"
          ></path>
        </svg>
        <h4 className="font-[Notion-Regular] font-bold ">Customer stories</h4>
      </div>

      <div className="w-full h-full flex items-center flex-col justify-center mt-8 bg-[#f6f5f4] py-8 px-10 rounded-xl">
        <div className="w-full flex items-center justify-between gap-10 flex-wrap">
          <div className="w-2/4 flex items-start flex-col gap-2">
            <h2 className="text-[2rem] font-bold font-[Notion-Regular]">
              OpenAI
            </h2>
            <p className="font-[one] text-[2.7rem] leading-[40px]">
              There’s power in a single platform where you can do all your work.
              Notion is that single place.
            </p>
            <span className="py-3 text-gray-800 hover:text-blue-500 cursor-pointer">
              Read the full story →
            </span>
          </div>

          <div className="w-[25vw] relative">
            <img src="./Homepage.avif" alt="" className="w-full rounded-2xl" />
            <i className="ri-play-circle-fill absolute bottom-0 right-2 text-[50px] text-white"></i>
          </div>
        </div>

        <LogoCard />
      </div>
    </div>
  );
}

export default Stories;
