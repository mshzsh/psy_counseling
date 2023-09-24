import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { toFaDigit } from "fa-utils";

const BuyTestCard = ({ visibleState }) => {
  const numb = 126655;
  return (
    <div className="flex bg-[#F9F9F9] ">
      {!visibleState && (
        <img
          src="https://i.postimg.cc/QN1RpDdJ/pastel-colorful-abstract-background-3d-illustratio-2022-08-23-00-05-05-utc-1-7.png"
          alt=""
          width={316}
          height={316}
        />
      )}
      <div className="w-full flex flex-col mr-[24px] mt-[24px]">
        <p
          className="text-[28px] font-[800]"
          style={{
            marginLeft: !visibleState ? "0" : "24px",
            textAlign: !visibleState ? "" : "center",
          }}
        >
          تست شخصیت شناسی نئو (NEO PI-R)
        </p>
        {!visibleState && (
          <p className="text-[16px] font-[600] mt-[16px] pl-[24px]">
            تست شخصیت شناسی نئو پنج عاملی NEO نسخه پیشرفته آزمونی جامع و کامل
            برای ارزیابی شخصیت می‌باشد که هم اکنون با تفسیر کامل و جامع ️
            می‌توانید انجام دهید.
          </p>
        )}
        {!visibleState && (
          <p className="text-[18px] font-[600] text-[#9A9A9A] mt-[8px]">
            دسته بندی: {"تست شخصیت شناسی"}
          </p>
        )}
        <div
          style={{
            width: !visibleState ? "284px" : "100%",
            paddingLeft: !visibleState ? "0" : "24px",
          }}
          className=" text-[22px] font-[800] flex justify-between text-[#36E2B4] mt-[24px]"
        >
          <p>مبلغ آزمون:</p>
          <p>{toFaDigit(numb.toLocaleString())}</p>
        </div>
        <div
          className="w-full flex justify-between items-center mt-[18px] pl-[24px]"
          style={{ paddingBottom: !visibleState ? "0" : "24px" }}
        >
          <button
            style={{ width: !visibleState ? "284px" : "100%" }}
            className="h-[54px] text-[22px] font-[600] bg-[#36E2B4] flex justify-center items-center "
          >
            شروع آزمون
          </button>
          {!visibleState && <ShareOutlinedIcon />}
        </div>
      </div>
    </div>
  );
};

export default BuyTestCard;
