import React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { toFaDigit } from "fa-utils";
import Time from "../Time";
import LikeNumber from "../LikeNumber";
import ViewNumber from "../ViewNumber";

const MagazineContent = ({ width, height, imageSrc }) => {
  return (
    <>
      <div
        className="absolute z-20  w-full h-full px-[24px] "
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        <div className="text-[16px] font-[600] mt-[24px] text-[#fff] flex">
          <ArticleOutlinedIcon style={{ fontSize: "24px" }} />
          <p className="mr-[8px]">بلاگ پست</p>
        </div>
        <div className="mt-[226px] flex flex-col">
          <div className="text-[14px] font-[500] text-[#fff]">
            <span>زیگموند فروید/</span>
            <span>۲۹ فروردین ۱۴۰۰</span>
          </div>
          <p className="text-[20px] font-[700] mt-[8px] text-[#fff]">
            این یک متن آزمایشی برای این مقاله میباشد
          </p>
          <div className="mt-[16px] flex justify-between">
            <ul className="flex justify-between z-20">
              <li>
                <Time
                  number={10}
                  color={"#fff"}
                  numberStyle={"text-[14px] font-[800] text-[#fff]"}
                />
              </li>
              <li className="mr-[18px]">
                <LikeNumber number={56} color="#fff" />
              </li>
              <li className="mr-[18px]">
                <ViewNumber number={56} color="#fff" />
              </li>
            </ul>
            <BookmarkBorderOutlinedIcon
              style={{ color: "#fff", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <img
        src={imageSrc}
        alt=""
        className="absolute w-full h-full top-0 z-10 object-cover"
      />
    </>
  );
};

export default MagazineContent;
