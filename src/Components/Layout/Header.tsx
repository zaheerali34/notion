import { useState } from "react";
import Logo from "../../assets/notion.png";
import "remixicon/fonts/remixicon.css";
import NotionBar from "../UI/NotionBar";

function Header() {
  const [showNotionBar, setShowNotionBar] = useState(false);

  const handleMouseEnter = () => setShowNotionBar(true);
  const handleMouseLeave = () => setShowNotionBar(false);

  return (
    <div className="w-full py-5 px-6 flex items-center justify-between font-[Notion-Regular]">
      <div className="w-[30px]">
        <img src={Logo} alt="Logo" className="w-full" />
      </div>

      <div className="flex items-center space-x-60">
        {showNotionBar && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" transition duration-700"
          >
            <NotionBar />
          </div>
        )}
        <nav>
          <ul className="flex items-center text-[1rem]">
            {/* NotionBar shown on hover */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <li className="topBar hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer flex items-center">
                Notion <i className="ri-arrow-down-s-line"></i>
              </li>
            </div>
            <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
              Mail{" "}
              <span className="bg-blue-100 text-blue-800 py-[1px] px-2 rounded-2xl text-[12px] font-semibold hover:bg-zinc-100 transition-all duration-200 cursor-pointer">
                New
              </span>
            </li>
            <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
              Calender
            </li>
            <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
              AI
            </li>
            <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
              Pricing
            </li>
            <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
              Request a demo
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer">
            Log in
          </button>
          <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-md text-[15px] font-semibold hover:bg-zinc-800 transition-all duration-300">
            Get Notion free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
