import Logo from "../Components/UI/Logo";

function Home() {
  return (
    <div className="w-full h-full px-25 mt-20 max-md:px-10 max-sm:px-4">
      <div className="w-full flex items-center max-xl:flex-col-reverse">
        <div className="w-2/4 max-lg:w-full max-lg:text-center">
          <h1 className="text-[3.5rem] max-lg:text-[3rem] max-sm:text-[2rem] max-sm:leading-8 max-lg:leading-11 font-bold font-[Notion-Regular] leading-15">
            The AI workspace that works for you.
          </h1>
          <p className="font-[Notion-Regular] font-semibold text-xl text-zinc-700 py-4 max-md:text-sm">
            One place where teams find every answer, automate the busywork, and
            get projects done.
          </p>

          <div className="flex items-center gap-3 max-xl:justify-center max-[480px]:w-full max-[480px]:flex-col">
            <button className="w-[150px] max-[480px]:w-full bg-blue-500 text-white text-center py-3 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold">
              Get Free Notion
            </button>

            <button className="w-[150px]  max-[480px]:w-full bg-blue-100 text-blue-700 text-center py-3 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-200 font-semibold">
              Request a demo
            </button>
          </div>
        </div>

        <div className="w-2/3 h-2/5 ">
          <video
            src="https://www.notion.com/front-static/nosey/hero/noseyHeroV2.mp4"
            loop
            autoPlay
            muted
          ></video>
        </div>
      </div>

      <Logo />
    </div>
  );
}

export default Home;
