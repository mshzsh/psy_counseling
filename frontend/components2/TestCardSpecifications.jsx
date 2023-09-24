import React from "react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { toFaDigit } from "fa-utils";

const TestCardSpecifications = () => {
  return (
    <ul className="bg-[#F9F9F9] flex flex-col gap-y-[15px] p-[24px] ">
      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <AnalyticsOutlinedIcon
            style={{ color: "#9966FF", fontSize: "32px" }}
          />
          <p className="text-[#9A9A9A] mr-[8px]">تعداد انجام:</p>
        </div>
        <p className="text-[#9A9A9A]">{toFaDigit(18654)}</p>
      </li>

      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <ArticleOutlinedIcon style={{ color: "#9966FF", fontSize: "32px" }} />
          <p className="text-[#9A9A9A] mr-[8px]">تعداد سوالات:</p>
        </div>
        <p className="text-[#9A9A9A]">{toFaDigit(240)}</p>
      </li>

      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <CalendarMonthOutlinedIcon
            style={{ color: "#9966FF", fontSize: "32px" }}
          />
          <p className="text-[#9A9A9A] mr-[8px]">رده سنی:</p>
        </div>
        <p className="text-[#9A9A9A]">بزرگسالان</p>
      </li>

      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <TimerOutlinedIcon style={{ color: "#9966FF", fontSize: "32px" }} />
          <p className="text-[#9A9A9A] mr-[8px]">زمان تقریبی:</p>
        </div>
        <p className="text-[#9A9A9A]">دقیقه{toFaDigit(15)}</p>
      </li>

      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <MessageOutlinedIcon style={{ color: "#9966FF", fontSize: "32px" }} />
          <p className="text-[#9A9A9A] mr-[8px]">تعداد نظرات:</p>
        </div>
        <p className="text-[#9A9A9A]">{toFaDigit(32)}</p>
      </li>

      <li className="w-full flex justify-between items-center">
        <div className="flex text-[20] font-[700] items-center">
          <StarBorderPurple500OutlinedIcon
            style={{ color: "#9966FF", fontSize: "32px" }}
          />
          <p className="text-[#9A9A9A] mr-[8px]">امتیاز:</p>
        </div>
        <p className="text-[#9A9A9A]">{toFaDigit("5 / 4.9")}</p>
      </li>
    </ul>
  );
};

export default TestCardSpecifications;
