import { NavLink, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth();

function SiteBar() {
  const navigate = useNavigate();

  const headler = () => {
    const id = uuidv4();
    navigate(`/newpage/${id}`);
  };
  return (
    <div className="w-[15rem] h-screen fixed top-0 left-0 bg-[#1c1c1c] overflow-hidden shadow-2xl z-50 border-r-1 rounded-md border-zinc-600">
      {/* <i className="ri-arrow-left-double-line text-zinc-600 text-3xl relative left-0"></i> */}
      <button onClick={()=> signOut(auth)} className="bg-zinc-600 hover:bg-zinc-500 transition-all duration-200 text-white py-2 px-4 rounded-md relative top-2 left-4 cursor-pointer">Sign Out</button>
      <div className="flex items-start flex-col gap-3 p-4 py-10">
        <ul className="w-full">
          <li className="w-full flex items-center gap-2 cursor-pointer hover:bg-zinc-800 p-[5px] rounded-sm transition-all duration-200">
            <i className="ri-search-line text-gray-400 text-xl"></i>
            <span className="text-zinc-300 font-semibold text-sm">Search</span>
          </li>

          <NavLink
            to={"/dashoboard"}
            className="w-full flex items-center gap-2 cursor-pointer hover:bg-zinc-800 p-[5px] rounded-sm transition-all duration-200"
          >
            <i className="ri-home-line text-gray-400 text-xl"></i>
            <span className="text-zinc-300 font-semibold text-sm">Home</span>
          </NavLink>

          <li className="w-full flex items-center gap-2 cursor-pointer hover:bg-zinc-800 p-[5px] rounded-sm transition-all duration-200">
            <i className="ri-inbox-2-line  text-gray-400 text-xl"></i>
            <span className="text-zinc-300 font-semibold text-sm">Inbox</span>
          </li>
        </ul>

        <ul className="w-full">
          <span className="text-zinc-400 text-sm">Private</span>
          
            <li className="w-full flex items-center gap-2 p-[5px] text-zinc-200 font-semibold bg-zinc-800 rounded-sm">
              <i className="ri-article-line text-[#8B8B8B]">Hello</i> 
            </li>
       

          <div
            onClick={headler}
            className="w-full flex items-center gap-2 cursor-pointer hover:bg-zinc-800 p-[5px] rounded-sm transition-all duration-200"
          >
            <i className="ri-add-line text-zinc-400 text-md"></i>
            <span className="text-zinc-400 font-semibold text-sm">Add new</span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SiteBar;
