import React from "react";

const BlogCreatedBy = ({ name, date }) => {
  return (
    <div className="flex items-center text-[#9A9A9A] text-[12px] font-[800]">
      <span>{name}</span>/<span>{date}</span>
    </div>
  );
};

export default BlogCreatedBy;
