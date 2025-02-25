import React from "react";
import { IconHeart } from "../assets/Icons";

function Footer() {
  return (
    <footer className="w-full py-[3rem] bg-[color:var(--color-fg)] text-center">
      <h1 className="text-display-medium font-mono text-[color:var(--color-bg)]">Tri-CodeX</h1>
      <span className="flex justify-center items-center gap-2 text-[color:var(--color-bg)]">
        MADE WITH <IconHeart fill="var(--color-bg)"/> BY ADARSH
      </span>
    </footer>
  );
}

export default Footer;
