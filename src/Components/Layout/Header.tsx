import { useState } from "react";
import Logo from "../../assets/notion.png";
import "remixicon/fonts/remixicon.css";
import NotionBar from "../UI/NotionBar";
import { NavLink } from "react-router-dom";

function Header() {
  const [showNotionBar, setShowNotionBar] = useState(false);
  const [menu, setMenu] = useState(true);
  const handleMouseEnter = () => setShowNotionBar(true);
  const handleMouseLeave = () => setShowNotionBar(false);

  const headler = ()=> {
    setMenu(!menu);
  }
  return (
    <div className="w-full py-5 px-6 flex items-center justify-between font-[Notion-Regular] fixed top-0 left-0 right-0 border-2 border-amber-50 bg-white z-50">
      <NavLink to={"/"} className="w-[30px]">
        <img src={Logo} alt="Logo" className="w-full" />
      </NavLink>

      <div className="flex items-center space-x-60 max-md:space-x-16">
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
          {
            menu ? 
            <ul className="flex items-center text-[1rem] max-xl:hidden">
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
            : 
             <ul className="w-full h-[50vh] bg-white flex flex-col  items-center text-[1.3rem] absolute top-[70px] left-0 max-xl:block font-bold transition-all duration-500">
              {/* NotionBar shown on hover */}
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <li className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer flex items-center ">
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
          }
        </nav>

        <div className="flex items-center gap-4">
          <NavLink
            to={"/login"}
            className="hover:bg-zinc-100 transition-all duration-200 py-1 px-3 rounded-sm cursor-pointer max-lg:hidden"
          >
            Log in
          </NavLink>
          <NavLink
            to={"/signup"}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded-md text-[15px] font-semibold hover:bg-zinc-800 transition-all duration-300"
          >
            Get Notion free
          </NavLink>

          <i className="ri-menu-line text-2xl hidden max-xl:block" onClick={headler}></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
