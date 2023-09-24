import { toFaDigit } from "fa-utils";
import React from "react";
import LimitAge from "./LimitAge";
import Time from "./Time";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import QuestionNumber from "./QuestionNumber";

const TestCard = () => {
  return (
    <div className="bg-[#F9F9F9] w-full flex">
      <img
        src="https://i.postimg.cc/KzNnK33M/pastel-colorful-abstract-background-3d-illustratio-2022-08-23-00-05-05-utc-1-6.png"
        alt=""
        width={208}
        height={208}
      />
      <div className="w-full flex-col mr-[24px] mt-[24px]">
        <p className="text-[28px] font-[800]">تست شخصیت شناسی نئو (NEO PI-R)</p>
        <p className="text-[18px] font-[600] text-[#9A9A9A] mt-[16px]">
          تست شخصیت شناسی نئو پنج عاملی NEO نسخه پیشرفته آزمونی جامع و کامل برای
          ارزیابی شخصیت می‌باشد که هم اکنون با تفسیر کامل و جامع ️ می‌توانید
          انجام دهید.
        </p>
        <div className="flex w-full justify-between mt-[18px]">
          <ul className="text-[16px] font-[600] text-[#9966FF] flex gap-x-[18px]">
            <li className="flex">
              <p>امتیاز</p>:&nbsp;
              {toFaDigit("5 / 4.9")}
            </li>
            <li>
              <Time
                number={15}
                numberStyle="text-[#9966FF] !text-[16px] !font-[600]"
                text="زمان تقریبی:"
              />
            </li>
            <li>
              <LimitAge color={"#9966FF"} styles="text-[#9966FF]" number={13} />
            </li>

            <li>
              <QuestionNumber number={13} />
            </li>
          </ul>
          <div className="text-[#36E2B4] ml-[22px] flex">
            <p>شروع آزمون</p>
            <ArrowBackIosNewOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
