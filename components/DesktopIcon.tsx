"use client";

import { motion } from "framer-motion";

type DesktopIconProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

export default function DesktopIcon({
  icon,
  label,
  onClick,
}: DesktopIconProps) {

  return (
    <motion.button
      onClick={onClick}

      initial={{
        opacity: 0,
        y: 10,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        scale: 1.05,
        y: -2,
      }}

      whileTap={{
        scale: 0.97,
      }}

      transition={{
        duration: 0.25,
      }}

      className="
        flex
        flex-col
        items-center
        gap-2

        p-3

        rounded-2xl

        hover:bg-white/5

        transition-colors

        w-28
      "
    >

      <div className="text-5xl">
        {icon}
      </div>

      <span
        className="
          text-sm
          text-zinc-200
          text-center
        "
      >
        {label}
      </span>

    </motion.button>
  );
}