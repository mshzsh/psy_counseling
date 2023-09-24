import React from "react";

const LeftChevron = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        color={color}
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default LeftChevron;
