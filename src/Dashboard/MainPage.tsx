import { useNavigate } from "react-router-dom";
import UpcomingEvents from "./UpcomingEvents";
import { v4 as uuidv4 } from "uuid";

function MainPage() {
  const navigate = useNavigate();

  const headler = () => {
    const id = uuidv4();
    navigate(`/newpage/${id}`);
  };

  return (
    <div className="w-full h-screen bg-zinc-900 py-3 px-4 flex items-center justify-center">
      <div className="flex items-start justify-center flex-col">
        <div>
          <span className="text-zinc-600 text-sm font-semibold">
            <i className="ri-time-line text-sm"></i> Recently Visited
          </span>

          <div onClick={headler} className="w-full flex items-center gap-2 mt-3">
            <div className="w-[120px] h-[100px] bg-zinc-800 rounded-xl shadow-2xl shadow-zinc-900 flex items-start flex-col justify-center cursor-pointer px-4 border-2 border-zinc-800 hover:border-zinc-600 transition-all duration-200">
              <i className="ri-file-add-line text-zinc-600 font-bold text-3xl"></i>
              <h4 className="text-sm text-zinc-600 font-semibold">New page</h4>
            </div>
          </div>
        </div>

        <UpcomingEvents />
      </div>
    </div>
  );
}

export default MainPage;
