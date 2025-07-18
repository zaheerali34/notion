import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

function BlockNoteEdite() {
  const editor = useCreateBlockNote();

  return (
    <div className="w-full h-full py-[10rem]">
      <BlockNoteView editor={editor} style={{paddingLeft: '15rem', }} />
    </div>
  );
}

export default BlockNoteEdite;
