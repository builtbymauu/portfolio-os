"use client";

import { aboutPanel } from "@/data/about";
import BootScreen from "@/components/BootScreen";
import { useState } from "react";

import DesktopIcon from "@/components/DesktopIcon";
import ExplorerWindow from "@/components/ExplorerWindow";

import { projects } from "@/data/projects";

export default function Home() {

  const [bootComplete, setBootComplete] =
    useState(false);

  const [activeProject, setActiveProject] =
    useState<keyof typeof projects | null>(null);

  const [selectedFileIndex, setSelectedFileIndex] =
    useState(0);

  const [aboutOpen, setAboutOpen] =
    useState(false);

  const [aboutFileIndex, setAboutFileIndex] =
    useState(0);

  const currentProject =
    activeProject ? projects[activeProject] : null;

  const selectedFile =
    currentProject?.files[selectedFileIndex];

  const selectedAboutFile =
    aboutPanel.files[aboutFileIndex];

  return (
    <main
      className="
        w-screen
        h-screen
        overflow-hidden
        relative
        bg-black
        text-white
      "
    >

      {/* Boot Screen */}
      {!bootComplete && (
        <BootScreen
          onComplete={() =>
            setBootComplete(true)
          }
        />
      )}

      {/* Background */}
      <div
        className="
          absolute
          inset-0

          overflow-hidden

          bg-[radial-gradient(circle_at_top,rgba(120,120,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(80,120,255,0.08),transparent_30%),linear-gradient(to_bottom_right,#020617,#000000,#0f172a)]
        "
      >

        {/* Grid */}
        <div
          className="
            absolute
            inset-0

            opacity-[0.15]

            bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

            bg-[size:30px_30px]
          "
        />

      </div>

      {/* Desktop Icons */}
      <div
        className={`
          absolute
          inset-0

          z-10

          p-8

          grid
          grid-cols-[repeat(auto-fill,minmax(110px,1fr))]
          auto-rows-max

          gap-y-10
          gap-x-6

          content-start

          overflow-y-auto

          transition-opacity
          duration-1000

          ${
            bootComplete
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >

        <DesktopIcon
          icon="📁"
          label="Research-Dynamic
                Bridge Oscillations"
          onClick={() => {
            setActiveProject("bridge");
            setSelectedFileIndex(0);
          }}
        />

        <DesktopIcon
          icon="📁"
          label="Math behind 1D Conduction"
          onClick={() => {
            setActiveProject("conduction");
            setSelectedFileIndex(0);
          }}
        />

        <DesktopIcon
          icon="📁"
          label="EEG & fNIRS integration"
          onClick={() => {
            setActiveProject("neural");
            setSelectedFileIndex(0);
          }}
        />

        <DesktopIcon
          icon="📁"
          label="Unfolding Chain Dynamics"
          onClick={() => {
            setActiveProject("chain");
            setSelectedFileIndex(0);
          }}
        />

        <DesktopIcon
          icon="📁"
          label="Space Elevator Tether Dynamics"
          onClick={() => {
            setActiveProject("tether");
            setSelectedFileIndex(0);
          }}
        />
        <DesktopIcon
          icon="📁"
          label="My first IEEE paper"
          onClick={() => {
            setActiveProject("musecroc");
            setSelectedFileIndex(0);
          }}
        />

      </div>

      {/* Project Window */}
      {currentProject && selectedFile && (

        <ExplorerWindow
          title={currentProject.title}

          files={currentProject.files}

          selectedFile={selectedFile}

          onSelectFile={(file) => {

            const index =
              currentProject.files.findIndex(
                (f) => f.name === file.name
              );

            setSelectedFileIndex(index);

          }}

          onClose={() =>
            setActiveProject(null)
          }
        />

      )}

      {/* About Window */}
      {aboutOpen && (

        <ExplorerWindow
          title={aboutPanel.title}

          position="
            top-10
            left-10
          "

          files={aboutPanel.files}

          selectedFile={selectedAboutFile}

          onSelectFile={(file) => {

            const index =
              aboutPanel.files.findIndex(
                (f: any) => f.name === file.name
              );

            setAboutFileIndex(index);

          }}

          onClose={() =>
            setAboutOpen(false)
          }
        />

      )}

      {/* System Bar */}
      <div
        className="
          absolute

          bottom-8
          left-1/2
          -translate-x-1/2

          w-[92vw]
          max-w-[1200px]

          h-16

          px-6

          bg-black/25
          backdrop-blur-2xl

          border
          border-white/10

          rounded-2xl

          shadow-[0_10px_40px_rgba(0,0,0,0.45)]

          flex
          items-center
          justify-between

          z-40
        "
      >

        {/* Left */}
        <div
          className="
            flex
            items-center
            gap-10
          "
        >

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Status
            </span>

            <span className="text-sm text-zinc-200">
              Online
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Projects
            </span>

            <span className="text-sm text-zinc-200">
              12 Active
            </span>
          </div>

        </div>

        {/* Right */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <a
            href="https://github.com/builtbymauu"
            target="_blank"
            className="
              px-4
              py-2

              rounded-xl

              bg-white/5

              text-sm
              text-zinc-300

              hover:bg-white/10
              hover:text-white

              transition-all
            "
          >
            GitHub
          </a>

          <a
            href="mailto:builtbymauu@gmail.com"
            className="
              px-4
              py-2

              rounded-xl

              bg-white/5

              text-sm
              text-zinc-300

              hover:bg-white/10
              hover:text-white

              transition-all
            "
          >
            Email
          </a>

          <button
            onClick={() => {
              setAboutOpen(true);
              setAboutFileIndex(0);
            }}

            className="
              px-4
              py-2

              rounded-xl

              bg-white/5

              text-sm
              text-zinc-300

              hover:bg-white/10
              hover:text-white

              transition-all
            "
          >
            About
          </button>

        </div>
      </div>

    </main>
  );
}