import React from "react";
import Time from "./Time";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import SmsNumber from "./SmsNumber";
import LikeNumber from "./LikeNumber";
import ViewNumber from "./ViewNumber";

const WideMagazineCard = () => {
  return (
    <div className="flex w-full h-[72px]">
      <img
        src="https://i.ibb.co/X8kYB21/Rectangle-470.png"
        width={72}
        height={72}
        alt=""
      />
      <div className="flex w-full flex-col mr-[18px]">
        <p className="text-[16px] font-[500] mt-[6px]">زیگموند فروید</p>
        <div className="flex w-full justify-between mt-[12px]">
          <ul className="flex  gap-x-[24px]">
            <li className="text-[#9A9A9A]">۲۹ فروردین ۱۴۰۰</li>
            <li>
              <Time number={10} color="#9A9A9A" />
            </li>
            <li className="flex">
              <GraphicEqOutlinedIcon style={{ color: "#9966FF" }} />
              <p className="text-[16px] font-[500] text-[#9966FF]">گوش کن</p>
            </li>
          </ul>
          <ul className="flex gap-x-[24px]">
            <li>
              <SmsNumber number={32} color="#9A9A9A" outLineStatus={true} />
            </li>
            <li>
              <LikeNumber number={56} color="#9A9A9A" />
            </li>
            <li>
              <ViewNumber number={56} color="#9A9A9A" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WideMagazineCard;
