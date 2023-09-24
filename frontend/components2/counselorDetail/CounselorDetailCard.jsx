import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import RatingStarComponent from "../RatingStarComponent";
import StatusComponent from "../StatusComponent";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import { toFaDigit } from "fa-utils";

const CounselorDetailCard = () => {
  return (
    <div className="flex w-[1224px] bg-[#F9F9F9] h-[221px]">
      <img
        src={"https://i.ibb.co/C9YHKfc/Rectangle-208-1.png"}
        width={392}
        height={221}
        alt=""
      />
      <div className="flex w-full justify-between">
        <div className="mr-[24px] flex flex-col mt-[33px]">
          <ul>
            <li className="flex items-center">
              <VerifiedIcon style={{ color: "#0099FF", marginBottom: "5px" }} />
              <p className="text-[28px] font-[800] mr-[9px]">
                نام و نام خانوادگی
              </p>
            </li>
            <li className="text-[24px] font-[500] ">حرفه در این بخش</li>
            <li className="flex items-center mt-[4px] h-[24px]">
              <RatingStarComponent number={4.2} emptynumber={5 - 4.2} />
              <p className="font-[600] text-[#9A9A9A] mr-[6px] mt-[7px]">
                {toFaDigit(698)} نظر
              </p>
            </li>
            <li className="flex items-center mt-[16px]">
              {/* <BeenhereIcon style={{ color: "#0099FF" }} />
              <p className="mr-[9px]">بیمه</p> */}
              <StatusComponent styles={"mr-[16px]"} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-[18px] font-[400] mt-[40px] ml-[90px]">
          <ul>
            <li className="flex">
              <p>تجربه</p>:&nbsp;
              <p className="font-[600]">{toFaDigit(20)}سال</p>
            </li>
            <li className="flex mt-[16px]">
              <p>مشاوره موفق</p>:&nbsp;
              <p className="font-[600]">
                {toFaDigit(6548)} (در {toFaDigit(3)} سال)
              </p>
            </li>
            <li className="flex mt-[16px]">
              <p>شماره نظام روانشناسی</p>:&nbsp;
              <p className="font-[600]">{toFaDigit(677616)}</p>
            </li>
            <li className="flex mt-[16px]">
              <BeenhereIcon style={{ color: "#0099FF" }} />
              <p className="mr-[9px]">بیمه</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CounselorDetailCard;
