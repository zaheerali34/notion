import SiteBar from "./SiteBar";
import { useOutletContext } from "react-router-dom";

function NewPage() {
  const { title, setTitle } = useOutletContext();

  return (
    <div className="w-full h-screen bg-zinc-900 py-3 flex items-center justify-center">
      <SiteBar title={title} />
      <div className="w-2/4 h-full flex items-center justify-start gap-4 flex-col py-10">
        <input
          type="text"
          placeholder="New page"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[80%] placeholder:text-3xl placeholder:text-zinc-600 placeholder:font-semibol py-10 text-3xl text-zinc-200 font-[Notion-Bold] border-none outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default NewPage;
