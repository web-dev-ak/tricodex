import React from "react";
import { useTheme } from "../scripts/ThemeContext";
import * as Icons from "../assets/Icons";

function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="flex border-[1px] cursor-pointer rounded-full gap-[4px] p-[4px]"
    >
      {/* Light Mode Icon */}
      <div
        className={`grid place-items-center size-[40px] rounded-full border 
          ${!isDark ? "border" : "border-transparent"}
        `}
      >
        <Icons.IconLightMode fill="var(--color-fg)" />
      </div>

      {/* Dark Mode Icon */}
      <div
        className={`grid place-items-center size-[40px] rounded-full border 
          ${isDark ? "border" : "border-transparent"}
        `}
      >
        <Icons.IconDarkMode fill="var(--color-fg)" />
      </div>
    </div>
  );
}


export default ThemeToggleButton;
