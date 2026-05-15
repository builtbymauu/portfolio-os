"use client";

import { useEffect, useState } from "react";

type BootScreenProps = {
  onComplete: () => void;
};

const lines = [
  "Connection established.",
  "",
  "Hey.",
  "I'm glad you're here.",
  "",
  "This workspace contains the projects,",
  "research, and systems I've spent",
  "the last few years building.",
  "",
  "Rather than placing everything",
  "into traditional webpages,",
  "I wanted to share the environment",
  "more directly.",
  "",
  "Feel free to explore.",
  "- Meher Patel",
];

export default function BootScreen({
  onComplete,
}: BootScreenProps) {

  const [displayedLines, setDisplayedLines] =
    useState<string[]>([]);

  const [currentLine, setCurrentLine] =
    useState("");

  const [lineIndex, setLineIndex] =
    useState(0);

  const [charIndex, setCharIndex] =
    useState(0);

  const [fadeOut, setFadeOut] =
    useState(false);

  useEffect(() => {

    if (lineIndex >= lines.length) {

      setTimeout(() => {

        setFadeOut(true);

        setTimeout(() => {
          onComplete();
        }, 1200);

      }, 1500);

      return;
    }

    const currentText = lines[lineIndex];

    if (charIndex < currentText.length) {

      const timeout = setTimeout(() => {

        setCurrentLine(
          (prev) => prev + currentText[charIndex]
        );

        setCharIndex((prev) => prev + 1);

      }, 35);

      return () => clearTimeout(timeout);

    } else {

      const timeout = setTimeout(() => {

        setDisplayedLines((prev) => [
          ...prev,
          currentText,
        ]);

        setCurrentLine("");

        setCharIndex(0);

        setLineIndex((prev) => prev + 1);

      }, 250);

      return () => clearTimeout(timeout);
    }

  }, [charIndex, lineIndex, currentLine, onComplete]);

  return (
    <div
      className={`
        absolute
        inset-0
        z-[100]

        bg-black

        flex
        items-center
        justify-center

        transition-all
        duration-1000
        ease-out

        ${
          fadeOut
            ? "opacity-0 scale-[1.02]"
            : "opacity-100 scale-100"
        }
      `}
    >

      {/* Ambient Background */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(80,80,120,0.18),transparent_40%)]
        "
      />

      {/* Terminal Window */}
      <div
        className="
          relative

          w-[90vw]
          max-w-[900px]

          h-[70vh]

          bg-zinc-950/80
          backdrop-blur-2xl

          border
          border-white/10

          rounded-3xl

          shadow-[0_0_80px_rgba(0,0,0,0.8)]

          overflow-hidden

          flex
          flex-col
        "
      >

        {/* Window Header */}
        <div
          className="
            h-14

            border-b
            border-white/10

            flex
            items-center
            justify-between

            px-4

            bg-black/30
          "
        >

          {/* Left */}
          <div
            className="
              text-xs
              uppercase
              tracking-[0.25em]

              text-zinc-500
            "
          >
            Workspace Access
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">

            <button
              className="
                w-8
                h-8

                flex
                items-center
                justify-center

                rounded-md

                text-zinc-500

                hover:text-white
                hover:bg-white/5

                transition-all
              "
            >
              —
            </button>

            <button
              className="
                w-8
                h-8

                flex
                items-center
                justify-center

                rounded-md

                text-zinc-500

                hover:text-white
                hover:bg-white/5

                transition-all
              "
            >
              □
            </button>

            <button
              onClick={onComplete}
              className="
                w-8
                h-8

                flex
                items-center
                justify-center

                rounded-md

                text-zinc-500

                hover:text-red-400
                hover:bg-red-500/10

                transition-all
              "
            >
              ✕
            </button>

          </div>

        </div>

        {/* Terminal Content */}
        <div
          className="
            flex-1

            p-8

            overflow-y-auto

            font-mono
            text-[15px]

            text-zinc-300

            leading-relaxed
          "
        >

          {displayedLines.map((line, index) => (

            <div
              key={index}
              className="whitespace-pre-wrap"
            >
              {line}
            </div>

          ))}

          <div className="whitespace-pre-wrap">

            {currentLine}

            <span
              className="
                inline-block
                w-[8px]
                h-[18px]

                ml-1

                bg-zinc-400

                animate-pulse
              "
            />

          </div>

        </div>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="
            absolute

            bottom-6
            right-6

            px-4
            py-2

            rounded-xl

            bg-white/5
            backdrop-blur-xl

            border
            border-white/10

            text-sm
            text-zinc-400

            hover:bg-white/10
            hover:text-white

            transition-all
          "
        >
          Skip Intro
        </button>

      </div>

    </div>
  );
}