import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import React, { useState, useEffect, useRef } from "react";
import StarterKit from "@tiptap/starter-kit";
import Modal from "react-modal";
import Image from "@tiptap/extension-image";

const MenuBar = ({ editor }) => {
  const [imageModal, setImageModal] = useState(false);
  const inputRef = useRef(null);

  if (!editor) {
    return null;
  }

  return (
    <div className="bg-white w-full text-black grid grid-cols-1 md:grid-cols-2 space-x-4 h-16 rounded-t-xl">
      <>
        <div className="w-full flex justify-around">
          <button
            onClick={() => editor.commands.toggleBold()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <i class="ri-bold"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <i class="ri-italic"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <i class="ri-strikethrough"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <i class="ri-code-view"></i>
          </button>

          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <i class="ri-paragraph"></i>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-1"></i>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-2"></i>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-3"></i>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-4"></i>
          </button>
        </div>
        <div className="flex justify-around">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-5"></i>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            <i class="ri-h-6"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <i class="ri-list-unordered"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <i class="ri-list-ordered"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            code block
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <i class="ri-double-quotes-l"></i>
          </button>

          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <i class="ri-arrow-go-back-line"></i>
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <i class="ri-arrow-go-forward-fill"></i>
          </button>
          <button>
            <i class="ri-image-line" onClick={() => inputRef.current.click()}>
              <input
                type={"file"}
                className="hidden"
                ref={inputRef}
                onClick={(e) =>
                  editor.commands.setImage({ src: e.target.value })
                }
              />
            </i>
          </button>
        </div>
      </>
    </div>
  );
};

const MyEditor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEsc = (event) => {
    if (event.key) setIsModalOpen(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);

    // return () => {
    //   window.removeEventListener("keydown", handleEsc);
    // };
  }, [isModalOpen]);

  const editor = useEditor({
    extensions: [StarterKit, Highlight.configure({ multicolor: true }), Image],
    content: "<h1>Tell Your Amazing Story ...</h1>",
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      console.log(json);
    },
  });

  return (
    <div className="flex flex-col w-full  container px-2 relative  ">
      <MenuBar editor={editor} className="fixed " />
      <div className=" bg-gray-400 w-full  relative">
        <EditorContent editor={editor} className="p-10" />
      </div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="h-14 w-14 bg-yellow-500 absolute bottom-2 left-5 rounded-full opacity-40 flex items-center justify-center cursor-pointer"
      >
        <i class="ri-question-mark"></i>
      </div>

      <Modal
        isOpen={isModalOpen}
        contentLabel="Minimal Modal Example"
        className="flex flex-col outline-none space-y-5 justify-center items-center bg-slate-600 backdrop-blur-[2px] backdrop-filter opacity-90 absolute top-20 left-20 right-20 bottom-20"
      >
        <h1 className="text-yellow-500 font-bold italic">Keyboard Hotkeys</h1>
        <ul className="text-center space-y-2">
          <li>
            Type # at the beginning of a new line and it will magically
            transform to a heading, same for ## , ### , #### , ##### and ######
            .
          </li>
          <li> use == around text to highlight it</li>
          <li>
            Type **two asterisks** or __two underlines__ and it will magically
            transform to bold text while you type.
          </li>
          <li>
            Type _One underlines_ and it will magically transform to Italic text
            while you type.
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default MyEditor;
