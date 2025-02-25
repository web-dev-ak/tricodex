import * as React from "react";

export const IconHeart = ({ fill = "currentColor", ...props }) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9999 4.20888C13.1757 3.12532 14.7069 2.5166 16.3053 2.5166C18.0313 2.5166 19.679 3.22637 20.8854 4.47734C22.0832 5.71841 22.75 7.3914 22.75 9.12882C22.75 10.8663 22.0831 12.5394 20.8854 13.7803C20.089 14.6059 19.2938 15.4502 18.4945 16.2989C16.871 18.0228 15.2301 19.7651 13.5256 21.4066L13.5216 21.4104C12.6426 22.2445 11.2505 22.2142 10.409 21.342L3.11399 13.7802C0.62867 11.204 0.62867 7.05367 3.11399 4.47745C5.54605 1.95644 9.46239 1.86692 11.9999 4.20888Z"
    />
  </svg>
);

export const IconCopy = ({ fill = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill={fill}
    {...props}
  >
    <path d="M280-240v-640h520v640H280Zm80-80h360v-480H360v480ZM120-80v-640h80v560h440v80H120Zm240-240v-480 480Z" />
  </svg>
);

export const IconPaste = ({ fill = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill={fill}
    {...props}
  >
    <path d="M120-120v-720h247q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h246v720H120Zm80-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
  </svg>
);

export const IconDarkMode = ({ fill = "currentColor", ...props }) => (
  <svg
    // className="fill-[color:var(--color-fg)]"
    fill={fill}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0997 20.552C9.73873 20.552 7.73181 19.7256 6.07898 18.0728C4.42631 16.4201 3.59998 14.4132 3.59998 12.052C3.59998 9.78917 4.36756 7.8485 5.90273 6.23C7.43789 4.61133 9.31764 3.73467 11.542 3.6C11.6856 3.6 11.8267 3.60517 11.9652 3.6155C12.1036 3.62583 12.2394 3.64125 12.3727 3.66175C11.8626 4.13858 11.4562 4.71483 11.1537 5.3905C10.8511 6.06617 10.6997 6.78667 10.6997 7.552C10.6997 9.19083 11.2734 10.5839 12.4207 11.7313C13.5679 12.8784 14.9609 13.452 16.5997 13.452C17.3754 13.452 18.0985 13.3008 18.769 12.9983C19.4395 12.6956 20.01 12.2892 20.4805 11.779C20.501 11.9123 20.5164 12.0483 20.5267 12.1868C20.5369 12.3251 20.542 12.4661 20.542 12.6098C20.4138 14.8341 19.5405 16.7138 17.922 18.249C16.3033 19.7843 14.3626 20.552 12.0997 20.552ZM12.0997 19.052C13.5664 19.052 14.8831 18.6478 16.0497 17.8395C17.2164 17.0312 18.0664 15.977 18.5997 14.677C18.2664 14.7603 17.9331 14.827 17.5997 14.877C17.2664 14.927 16.9331 14.952 16.5997 14.952C14.5497 14.952 12.8039 14.2312 11.3622 12.7895C9.92056 11.3478 9.19973 9.602 9.19973 7.552C9.19973 7.21867 9.22473 6.88533 9.27473 6.552C9.32473 6.21867 9.39139 5.88533 9.47473 5.552C8.17473 6.08533 7.12056 6.93533 6.31223 8.102C5.50389 9.26867 5.09973 10.5853 5.09973 12.052C5.09973 13.9853 5.78306 15.6353 7.14973 17.002C8.51639 18.3687 10.1664 19.052 12.0997 19.052Z" />
  </svg>
);

export const IconLightMode = ({ fill = "currentColor", ...props }) => (
  <svg
    // className="fill-[color:var(--color-fg)]"
    fill={fill}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.7513 16.5 9.68917 16.0622 8.8135 15.1865C7.93783 14.3108 7.5 13.2487 7.5 12C7.5 10.7513 7.93783 9.68917 8.8135 8.8135C9.68917 7.93783 10.7513 7.5 12 7.5C13.2487 7.5 14.3108 7.93783 15.1865 8.8135C16.0622 9.68917 16.5 10.7513 16.5 12C16.5 13.2487 16.0622 14.3108 15.1865 15.1865C14.3108 16.0622 13.2487 16.5 12 16.5ZM5 12.75H1.25V11.25H5V12.75ZM22.75 12.75H19V11.25H22.75V12.75ZM11.25 5V1.25H12.75V5H11.25ZM11.25 22.75V19H12.75V22.75H11.25ZM6.573 7.577L4.23075 5.3155L5.2905 4.20575L7.54625 6.523L6.573 7.577ZM18.7095 19.7943L16.4385 17.4615L17.427 16.423L19.7693 18.6845L18.7095 19.7943ZM16.423 6.573L18.6845 4.23075L19.7943 5.2905L17.477 7.54625L16.423 6.573ZM4.20575 18.7095L6.5385 16.4385L7.55775 17.427L5.30575 19.7788L4.20575 18.7095Z" />
  </svg>
);

export const IconDocumentation = ({
  fill = "currentColor",
  stroke = "none",
  ...props
}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 14V18.4C4 18.7314 4.26863 19 4.6 19H10"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 14V18.4C19 18.7314 18.7314 19 18.4 19H14"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 5H18.4C18.7314 5 19 5.26863 19 5.6V10"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10V5.6C4 5.26863 4.26863 5 4.6 5H10"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 19V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V19"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 10H5C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14H4"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H19"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 5V4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4V5"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconGithub = ({ fill = "currentColor", ...props }) => (
  <svg
    width={24}
    height={24}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z"
    />
  </svg>
);

export const IconHamMenu = ({ stroke = "none", ...props }) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 7.5H31.5"
      stroke={stroke}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 18H31.5"
      stroke={stroke}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 28.5H31.5"
      stroke={stroke}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconHamMenuClose = ({ stroke = "none", ...props }) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_523)">
      <path
        d="M5.77124 30.728L31.2271 5.27213"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.77051 5.2749L31.2264 30.7307"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath>
        <rect width={36} height={36} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconArrowRight = ({ fill = "currentColor", stroke = "none", ...props }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.81818 5.45453L16.3636 12L9.81818 18.5454"
      stroke={stroke}
      strokeWidth={1.63636}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);