import React from "react";
import * as Icons from "../assets/Icons";

export const ButtonDocumentation = (props) => (
  <button className="flex items-center gap-[8px] border rounded-full px-[20px] py-[12px] cursor-pointer">
    <Icons.IconDocumentation fill="var(--color-bg)" stroke="var(--color-fg)" />
    {props.buttonText}
  </button>
);

export const ButtonGithub = (props) => (
  <button className="flex items-center gap-[8px] bg-[color:var(--color-fg)] text-[color:var(--color-bg)] rounded-full px-[20px] py-[12px] cursor-pointer">
    <Icons.IconGithub fill="var(--color-bg)" />
    {props.buttonText}
  </button>
);

export const ButtonPrimary = ({ onClick, buttonText }) => (
  <button
    onClick={onClick}
    className="flex max-w-max items-center gap-[8px] bg-[color:var(--color-fg)] text-[color:var(--color-bg)] px-[24px] py-[12px] cursor-pointer"
  >
    {buttonText}
    <Icons.IconArrowRight fill="var(--color-fg)" stroke="var(--color-bg)" />
  </button>
);

export const IconButtonCopy = ({ onClick }) => (
  <button className="w-[48px] h-[48px] grid place-content-center border cursor-pointer" onClick={onClick}>
    <Icons.IconCopy fill="var(--color-fg)" />
  </button>
);

export const IconButtonPaste = ({ onClick }) => (
  <button className="w-[48px] h-[48px] grid place-content-center border cursor-pointer" onClick={onClick}>
    <Icons.IconPaste fill="var(--color-fg)" />
  </button>
);
