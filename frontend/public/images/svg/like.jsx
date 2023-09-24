import React from "react";

const Like = ({ color }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 16H4.5V6L10.5 0L11.167 0.458C11.417 0.638667 11.601 0.868 11.719 1.146C11.837 1.42333 11.8613 1.708 11.792 2L11 6H16.5C16.9167 6 17.2707 6.146 17.562 6.438C17.854 6.72933 18 7.08333 18 7.5V8.688C18 8.79867 17.9897 8.89933 17.969 8.99C17.9483 9.08 17.917 9.17367 17.875 9.271L15.396 15.083C15.2707 15.361 15.083 15.5833 14.833 15.75C14.583 15.9167 14.3053 16 14 16ZM3 6V16H0V6H3Z"
        fill={color}
      />
    </svg>
  );
};

export default Like;
