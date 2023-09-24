import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import RatingStarComponent from "./RatingStarComponent";

const CounselorInMag = () => {
  return (
    <div className="w-full flex bg-[#F9F9F9]">
      <img src="https://i.ibb.co/VSnqD67/Rectangle-604.png" alt="counselor" />
      <ul className="flex flex-col mr-[24px] justify-between mt-[16px] mb-[10px]">
        <li className="flex">
          <VerifiedIcon style={{ color: "#0099FF" }} />
          <p className="text-[18px] font-[600] mr-[12px]">نام و نام خانوادگی</p>
        </li>
        <li className="text-[16px] font-[600] text-[#9A9A9A]">
          حرفه در این بخش
        </li>
        <li>
          <RatingStarComponent number={3.1} emptynumber={5 - 3.1} />
        </li>
        <li className="text-[16px] font-[600]">تعداد نظرات: ۶۵۸</li>
      </ul>
    </div>
  );
};

export default CounselorInMag;
