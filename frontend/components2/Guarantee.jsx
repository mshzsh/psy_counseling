import React from "react";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import RunningWithErrorsOutlinedIcon from "@mui/icons-material/RunningWithErrorsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

const Guarantee = () => {
  return (
    <div className="w-full h-full">
      <ul className="w-full flex justify-evenly">
        <li className="flex flex-col w-[202px] items-center">
          <VerifiedUserOutlinedIcon
            style={{ color: "#0099FF", fontSize: "75px" }}
          />
          <p className="text-[20px] font-[700] mt-[16px]">حفظ حریم شخصی</p>
          <p className="text-[18px] font-[400] mt-[12px] text-center">
            جزئیات مشاوره و اطلاعات شخصی شما ۱۰۰% محرمانه باقی خواهد ماند.
          </p>
        </li>
        <li className="flex flex-col items-center w-[292px]">
          <RunningWithErrorsOutlinedIcon
            style={{ color: "#0099FF", fontSize: "75px" }}
          />
          <p className="text-[20px] font-[700] mt-[16px]">کمترین زمان انتظار</p>
          <p className="text-[18px] font-[400] mt-[12px] text-center">
            منتظر زمان مناسب تا مراجعه به پزشک نباشید، هر زمان که نیاز داشتید
            سوالتان را از متخصصان بپرسید.
          </p>
        </li>
        <li className="flex flex-col w-[262px] items-center">
          <GroupOutlinedIcon style={{ color: "#0099FF", fontSize: "75px" }} />
          <p className="text-[20px] font-[700] mt-[16px]">
            ارجاع رایگان به پزشک دیگر
          </p>
          <p className="text-[18px] font-[400] mt-[12px] text-center">
            اگر از مشاوره ناراضی بودید، پس از بررسی، شما را به یکی دیگر از
            پزشکان مجرب ارجاع می‌دهیم.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Guarantee;
