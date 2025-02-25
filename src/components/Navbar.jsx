import React, { useState } from "react";
import * as Icons from "../assets/Icons";
import ThemeToggleButton from "./ThemeToggleButton";
import * as Buttons from "./IconButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex w-full px-4 sm:px-8 md:px-16 py-4 text-[color:var(--color-fg)] justify-between select-none">
      {/* Logo */}
      <div>
        <h1 className="font-mono text-[2rem]">Tri-CodeX</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-[8px]">
        <ThemeToggleButton />
        <Buttons.ButtonDocumentation buttonText="Documentation" />
        <Buttons.ButtonGithub buttonText="Github" />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex gap-4 md:hidden">
        <ThemeToggleButton />
        <div className="grid place-items-center ">
          {/* Show Hamburger Icon when the menu is closed */}
          {!isOpen ? (
            <Icons.IconHamMenu
              onClick={() => setIsOpen(true)} // Toggle the menu open
              stroke="var(--color-fg)"
            />
          ) : (
            // Show Close Icon when the menu is open
            <Icons.IconHamMenuClose
              onClick={() => setIsOpen(false)} // Toggle the menu close
              stroke="var(--color-fg)"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu (Displayed when isOpen is true) */}
      {isOpen && (
        <div className="absolute top-20 right-4 bg-[color:var(--color-bg)] drop-shadow-xl p-4 rounded-[36px] flex flex-col gap-4 md:hidden">
          {/* <ThemeToggleButton /> */}
          <Buttons.ButtonDocumentation buttonText="Documentation" />
          <Buttons.ButtonGithub buttonText="Github" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
