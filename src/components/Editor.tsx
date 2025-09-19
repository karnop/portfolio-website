"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  value: object;
  onChange: (value: object) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false, // 👈 prevents SSR hydration mismatch
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
  });

  if (!editor) return null; // Render nothing until the editor initializes

  return (
    <div className="border border-neutral-300 rounded-lg p-2">
      <EditorContent editor={editor} />
    </div>
  );
}
