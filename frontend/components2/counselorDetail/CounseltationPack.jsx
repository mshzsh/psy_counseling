import React from "react";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import RingVolumeOutlinedIcon from "@mui/icons-material/RingVolumeOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

import Switch from "../filters/Switch";
import { toFaDigit } from "fa-utils";

const CounseltationPack = ({ handleSelect, pac, disableState }) => {
  const phone = 95000;
  const video = 135000;
  const faceToFace = 241000;

  return (
    <div
      onClick={() => handleSelect(pac.id)}
      className={`${
        disableState
          ? "pointer-events-none bg-[#F9F9F9]"
          : "pointer-events-auto bg-[#fff]"
      } w-full cursor-pointer h-[180px] p-[16px] mt-[16px] ${
        disableState ? "border-[1px] border-[#EDEDED]" : ""
      } ${
        pac.isActive
          ? "border-[1px] border-[#36E2B4]"
          : !disableState && "border-[1px] border-[#9A9A9A]"
      }`}
    >
      <div className="flex">
        {pac.id === 1 && (
          <PhoneCallbackIcon
            style={{ color: `${disableState ? "#CBCBCB" : "#36E2B4"}` }}
          />
        )}
        {pac.id === 2 && (
          <VideocamIcon
            style={{ color: `${disableState ? "#CBCBCB" : "#36E2B4"}` }}
          />
        )}
        {pac.id === 3 && (
          <AirlineSeatReclineExtraIcon
            style={{ color: `${disableState ? "#CBCBCB" : "#36E2B4"}` }}
          />
        )}
        <p
          className={`${
            disableState ? "text-[#9A9A9A]" : " text-black"
          } text-[18px] font-[600] mr-[8px]`}
        >
          {pac.id === 1 && "مشاوره تلفنی"}
          {pac.id === 2 && "مشاوره ویدئویی"}
          {pac.id === 3 && "مشاوره حضوری"}
        </p>
      </div>
      <div
        className={`${
          disableState ? "text-[#CBCBCB]" : "text-[#9A9A9A]"
        } flex mt-[8px]`}
      >
        <TimerOutlinedIcon
          style={{ color: `${disableState ? "#CBCBCB" : "#9966FF"}` }}
        />
        <p className="text-[16px] font-[600] mr-[8px] ">
          {pac.id === 1 && "پاسخ‌دهی کمتر از ۳ ساعت (حداکثر ۳ ساعت)"}
          {pac.id === 2 && "تعیین وقت توسط شما"}
          {pac.id === 3 && "تعیین وقت توسط شما"}
        </p>
      </div>
      <div
        className={`${
          disableState ? "text-[#CBCBCB]" : "text-[#9A9A9A]"
        } flex mt-[8px]`}
      >
        <HourglassEmptyOutlinedIcon
          style={{ color: `${disableState ? "#CBCBCB" : "#9966FF"}` }}
        />
        <p className="text-[16px] font-[600] mr-[8px] ">
          {pac.id === 1 && "مدت زمان گفتگو ۲۰ دقیقه"}
          {pac.id === 2 && "مدت زمان گفتگو ۴۵ قیقه"}
          {pac.id === 3 && "مدت زمان گفتگو ۵۰ دقیقه"}
        </p>
      </div>
      <div>
        <ul className="flex justify-between items-center mt-[10px]">
          <li
            className={`w-[158px] flex items-center justify-evenly  h-[42px] ${
              pac.id === 1 ? "border-[1px] border-[#CBCBCB]" : ""
            }`}
          >
            {pac.id === 1 && (
              <>
                <RingVolumeOutlinedIcon
                  style={{ color: `${disableState ? "#CBCBCB" : "#36E2B4"}` }}
                />
                <p
                  className={`${
                    disableState ? "text-[#CBCBCB]" : "text-black"
                  } text-[16px] font-[600]`}
                >
                  فوری
                </p>
                <Switch />
              </>
            )}
          </li>
          <li>
            <p
              className={`${
                disableState ? "text-[#CBCBCB]" : "text-[#36E2B4]"
              } text-[#36E2B4] text-[22px] font-[800]`}
            >
              {toFaDigit(
                (pac.id === 1 && phone.toLocaleString()) ||
                  (pac.id === 2 && video.toLocaleString()) ||
                  (pac.id === 3 && faceToFace.toLocaleString())
              )}
              تومان
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CounseltationPack;
