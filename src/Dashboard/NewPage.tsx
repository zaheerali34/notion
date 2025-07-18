import SiteBar from "./SiteBar";
import BlockNoteEdite from "./BlockNoteEdite";

function NewPage() {

  return (
    <div className="w-full h-screen bg-[#1f1f1f]">
      <SiteBar />
      <BlockNoteEdite />
    </div>
  );
}

export default NewPage;
