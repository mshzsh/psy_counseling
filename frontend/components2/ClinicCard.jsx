import React from "react";

const ClinicCard = ({ Icon, styles }) => {
  return (
    <div
      className={`${styles} w-[392px] h-[172px] mx-[12px] bg-[#fff] flex flex-row-reverse`}
    >
      <div className="flex flex-col pr-[16px] pl-[20px] pt-[18px] pb-[17px] border-[2px] border-[#F9F9F9]">
        <p className="text-[#36E2B4] font-[800] text-[22px]">خانواده</p>
        <p className="text-[18px] font-[400]">
          تعارضات زناشویی، روابط زناشویی و ...
        </p>
        <p className="text-[#9A9A9A] font-[600] text-[16px] mt-[8px]">
          ۹۵ پزشک متخصص
        </p>
      </div>
      <div className="bg-[#F9F9F9] flex items-center px-[50.17px] ">
        <Icon style={{ color: "#9966FF", fontSize: "78px" }} />
      </div>
    </div>
  );
};

export default ClinicCard;
