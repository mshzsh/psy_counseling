import React, { useState, useEffect } from "react";

const TestToolbar = ({ setGetToolbarId }) => {
  const [state, setState] = useState([
    { id: 1, name: "توضیحات آزمون", isActive: false },
    { id: 2, name: "اعتبار آزمون", isActive: false },
    { id: 3, name: "نظرات کاربران", isActive: false },
    { id: 4, name: "سوالات متداول", isActive: false },
    { id: 5, name: "گزارش تغییرات", isActive: false },
  ]);

  const idHandler = (id) => {
    setGetToolbarId(id);
    let StateTemplate = state;
    const index = state.findIndex((s) => s.id === id);
    StateTemplate.forEach((s) => (s.isActive = false));
    StateTemplate[index].isActive = true;
    setState([...StateTemplate]);
  };

  return (
    <ul className="w-full h-[59px] flex items-center gap-x-[16px] pr-[24px] text-[16px] font-[600] bg-[#F9F9F9] my-[24px]">
      {state.map((s) => (
        <li
          key={s.id}
          onClick={() => idHandler(s.id)}
          className={
            s.isActive ? "text-[#9966FF] cursor-pointer" : "cursor-pointer"
          }
        >
          {s.name}
        </li>
      ))}
    </ul>
  );
};

export default TestToolbar;
