import Integrates from "./Integrates";

function CardSearch() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-25 max-xl:px-15 max-sm:px-4 max-xl:flex-col max-xl:h-full max-lg:py-20">
      <div className="w-2/4 max-xl:w-full">
        <h1 className="text-[3rem] font-bold font-[Notion-Regular] leading-12">Find anything with one search.</h1>
        <p className="py-2">
          Search across your company knowledge and apps, right inside Notion.
        </p>
        <div className="flex items-center gap-3">
          <button className="w-[150px] bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-400 my-3">
            Try for free
          </button>
          <button className="text-blue-500">Request a demo →</button>
        </div>

        <Integrates/>
      </div>

      <div className="w-2/4 max-xl:w-full">
        <video src="./homepage.mp4" loop autoPlay muted className=" rounded-xl"></video>
      </div>
    </div>
  );
}

export default CardSearch;
