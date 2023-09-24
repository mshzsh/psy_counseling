import React from "react";

const Page = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Page;
