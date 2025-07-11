import Logo from "../Components/UI/Logo";

function Home() {
  return (
    <div className="w-full h-full px-25 mt-20">
      <div className="w-full flex items-center">
        <div className="w-2/4">
          <h1 className="text-[3.5rem] font-bold font-[Notion-Regular] leading-15">
            The AI workspace that works for you.
          </h1>
          <p className="font-[Notion-Regular] font-semibold text-xl text-zinc-700 py-4">
            One place where teams find every answer, automate the busywork, and
            get projects done.
          </p>

          <div className="flex items-center gap-3">
            <button className="w-[150px] bg-blue-500 text-white text-center py-3 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-400 font-semibold">
              Get Free Notion
            </button>

            <button className="w-[150px] bg-blue-100 text-blue-700 text-center py-3 transition-all duration-500 rounded-md cursor-pointer hover:bg-blue-200 font-semibold">
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
