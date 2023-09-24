import React from "react";
import RatingStarComponent from "./RatingStarComponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LikeNumber from "./LikeNumber";

const UserComment = ({ styles }) => {
  return (
    <div className={`${styles} p-[24px] bg-[#F9F9F9] flex flex-col w-full`}>
      <div className=" flex mb-[16px]">
        <AccountCircleOutlinedIcon
          style={{ color: "#9A9A9A", fontSize: "62px", marginLeft: "16px" }}
        />
        <div className="w-full">
          <div className="w-full flex justify-between mt-[5px] ">
            <div>
              <div className="flex flex-col ">
                <p className="text-[16px] font-[600] ">نام و نام خانوادگی</p>
                <div className="flex text-[18px] font-[600] mt-[5px] text-[#CBCBCB]">
                  <p>شهر: تهران</p>
                  <p className="mr-[5px]">۱۴۰۱/۰۷/۰۷</p>
                  <p className="mr-[8px]">۲۰:۱۵</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start  w-[120px]">
              <RatingStarComponent number={3.2} emptynumber={5 - 3.2} />
              <LikeNumber
                number={56}
                situation=""
                color="#CBCBCB"
                styles="mt-[8px] mr-auto flex-row-reverse"
                numberStyle={"ml-[5px]"}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-[18px] font-[600]">
        لورم ایپسوم و لورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم
        ایپسوم و لو ایپسوم و لایپسوم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لور
        لورمایلورماسوم و لوایپسوم و لورم ایپسوم و لورم ایپسوم لورایپسوم و ورم
        ایپلورمایپسوم و لورم ایپسوم و لور یپسو لورمایپسوم و لورم ایپسوم و لو
        ایپسوم و لایپسوم لورمایپسوم و لورم ایپسوم و لورملورم
      </p>
    </div>
  );
};

export default UserComment;
