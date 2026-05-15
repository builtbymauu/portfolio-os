"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

import {
  FileText,
  ImageIcon,
  Video,
  File,
} from "lucide-react";

type FileType = {
  name: string;
  type: string;
  content?: string;
  url?: string;
};

type ExplorerWindowProps = {
  title: string;
  files: FileType[];
  selectedFile: FileType;
  onSelectFile: (file: FileType) => void;
  onClose: () => void;
  position?: string;
};

export default function ExplorerWindow({
  title,
  files,
  selectedFile,
  onSelectFile,
  onClose,
  position,
}: ExplorerWindowProps) {

  const [markdownContent, setMarkdownContent] =
    useState("");

  useEffect(() => {

    async function loadMarkdown() {

      if (
        selectedFile.type === "markdown" &&
        selectedFile.url
      ) {

        try {

          const response =
            await fetch(selectedFile.url);

          const text =
            await response.text();

          setMarkdownContent(text);

        } catch {

          setMarkdownContent(
            "# Failed to load markdown file."
          );

        }

      } else {

        setMarkdownContent("");

      }
    }

    loadMarkdown();

  }, [selectedFile]);

  function getFileIcon(type: string) {

    switch (type) {

      case "markdown":
      case "text":
        return <FileText size={18} />;

      case "image":
        return <ImageIcon size={18} />;

      case "video":
        return <Video size={18} />;

      default:
        return <File size={18} />;
    }
  }

  function renderFile() {

    switch (selectedFile.type) {

      case "markdown":
        return (
          <article
            className="
              prose
              prose-invert
              max-w-none

              prose-headings:text-white
              prose-headings:font-semibold

              prose-p:text-zinc-300
              prose-p:leading-relaxed

              prose-strong:text-white

              prose-li:text-zinc-300

              prose-code:text-cyan-300

              prose-pre:bg-black/40
              prose-pre:border
              prose-pre:border-white/10

              prose-blockquote:text-zinc-400

              text-zinc-200
            "
          >
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {
                selectedFile.url
                  ? markdownContent
                  : selectedFile.content || ""
              }
            </ReactMarkdown>
          </article>
        );

      case "image":
        return (
          <img
            src={selectedFile.url}
            alt={selectedFile.name}
            className="
              rounded-2xl
              w-full
              object-contain
            "
          />
        );

      case "video":
        return (
          <video
            controls
            className="
              w-full
              rounded-2xl
            "
          >
            <source src={selectedFile.url} />
          </video>
        );

      case "pdf":
        return (
          <iframe
            src={selectedFile.url}
            className="
              w-full
              h-full

              bg-white
            "
          />
        );

      default:
        return (
          <pre
            className="
              text-zinc-300
              whitespace-pre-wrap
            "
          >
            {selectedFile.content}
          </pre>
        );
    }
  }

  return (
    <motion.div

      initial={{
        opacity: 0,
        scale: 0.96,
        y: 20,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        scale: 0.98,
        y: 10,
      }}

      transition={{
        duration: 0.35,
      }}

      className={`
        absolute

        ${
          position
            ? position
            : `
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            `
        }

        w-[1050px]
        max-w-[92vw]

        h-[75vh]

        bg-zinc-900/60
        backdrop-blur-2xl

        border
        border-white/10

        rounded-[28px]

        overflow-hidden

        shadow-[0_20px_80px_rgba(0,0,0,0.55)]

        flex

        z-50
      `}
    >

      {/* Sidebar */}
      <div
        className="
          w-72
          bg-black/20

          border-r
          border-white/10

          flex
          flex-col
        "
      >

        {/* Header */}
        <div
          className="
            h-16

            border-b
            border-white/10

            flex
            items-center
            justify-between

            px-5
          "
        >

          <h2 className="text-sm text-zinc-200">
            {title}
          </h2>

          <button
            onClick={onClose}

            className="
              px-3
              py-1

              rounded-lg

              bg-white/5

              text-xs
              text-zinc-300

              hover:bg-white/10

              transition-all
            "
          >
            close
          </button>

        </div>

        {/* Files */}
        <div className="p-3 space-y-1 overflow-y-auto">

          {files.map((file) => (

            <button
              key={file.name}

              onClick={() =>
                onSelectFile(file)
              }

              className={`
                w-full

                flex
                items-center
                gap-3

                px-3
                py-3

                rounded-xl

                transition-all

                ${
                  selectedFile.name === file.name
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }
              `}
            >

              <div className="text-zinc-400">
                {getFileIcon(file.type)}
              </div>

              <span className="text-sm text-zinc-200">
                {file.name}
              </span>

            </button>

          ))}

        </div>

      </div>

      {/* Viewer */}
      <div
        className="
          flex-1

          overflow-y-auto

          bg-zinc-950/30
        "
      >

        {/* Viewer Header */}
        <div
          className="
            h-16

            border-b
            border-white/10

            flex
            items-center

            px-8
          "
        >

          <h1 className="text-lg text-zinc-100">
            {selectedFile.name}
          </h1>

        </div>

        {/* Content */}
        <div
          className={`
            ${
              selectedFile.type === "pdf"
                ? "h-[calc(75vh-64px)]"
                : "p-12 pb-24"
            }
          `}
        >
          {renderFile()}
        </div>

      </div>

    </motion.div>
  );
}