import React, { useRef, useState } from "react";

const AccordionComponent = ({ state }) => {
  const refHight = useRef();
  //   console.log(refHight.current.clientHeight, "active");
  return (
    <div
      className={`text-[18px] font-[600] transition-all duration-300 scrollbar-none ${
        state.isActive
          ? `h-[${refHight.current.clientHeight}px] overflow-auto`
          : "h-0 overflow-hidden"
      }`}
    >
      <p ref={refHight}>{state.answer}</p>
    </div>
  );
};

export default AccordionComponent;
