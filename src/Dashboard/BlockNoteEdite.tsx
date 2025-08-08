import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

function BlockNoteEdite() {
  const editor = useCreateBlockNote();

  return (
    <div className="w-full h-full py-[10rem] max-md:py-[3rem]">
      <BlockNoteView editor={editor} className="w-full pl-[0] md:pl-[15rem]"  />
    </div>
  );
}

export default BlockNoteEdite;
