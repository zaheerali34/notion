import CardData from "../../utils/CardsData.json";

function Cards() {
  return (
    <div className="w-full my-6 font-[Notion-Regular] flex items-center flex-wrap gap-5 justify-center max-lg:flex-col max-lg:justify-center max-xl:px-15 max-sm:px-4">
      {CardData.map((items, index) => (
        <div key={index} className="w-[42%] h-2/4 p-6 rounded-[15px] hover:shadow-md transition-all duration-200 cursor-pointer max-xl:w-full" style={{backgroundColor: items.bgColor}}>
          <div className="flex items-center gap-2">
            <img src={items.icone} alt="" className="w-[30px]" />
            <h3 className="font-bold text-sm text-zinc-900">
              {items.textIcone}
              <span className="bg-[#fffcfb] text-zinc-800 py-[1px] px-2 rounded-2xl text-[12px] font-semibold hover:bg-zinc-100 transition-all duration-200 cursor-pointer">
                New
              </span>
            </h3>
          </div>

          <div className="w-full flex items-center justify-between">
            <h2 className="text-[1.7rem] font-bold text-black py-3">
              {items.Heading}
            </h2>
            <i className="ri-arrow-right-line bg-white py-2 px-3 rounded-full"></i>
          </div>

          <img
            src={items.image}
            alt=""
            className=" object-cover w-full h-full py-3"
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
