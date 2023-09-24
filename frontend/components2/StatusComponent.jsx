import React from "react";

const StatusComponent = ({ styles }) => {
  return (
    <div
      className={`${styles} w-[67px] h-[26px] text-[16px] font-[600] flex  justify-center bg-[#B4F4E3] border-[1px] border-[#36E2B4]`}
    >
      <div className="w-[10px] h-[10px] bg-[#1AB88E] my-[8px] rounded-[50%]" />
      <p className="mt-[3px] mr-[8px]">فعال</p>
    </div>
  );
};

export default StatusComponent;
