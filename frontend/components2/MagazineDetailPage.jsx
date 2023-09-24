import React, { useState, useEffect, useRef } from "react";
import MagazineLittleCard from "./MagazineLittleCard";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import WideMagazineCard from "./WideMagazineCard";
import TitleComponent from "./TitleComponent";
import CounselorInMag from "./CounselorInMag";
import SmsIcon from "@mui/icons-material/Sms";
import UserComment from "./UserComment";
import UserCommentComponent from "./userComment/UserCommentComponent";

const MagazineDetailPage = () => {
  const [positionState, setPositionState] = useState(false);
  const [topState, setTopState] = useState(0);
  const refHeight = useRef();
  const testArray = [1, 1, 1, 1];
  const magazineArray = [
    { id: 1, name: "پادکست" },
    { id: 2, name: "ویدئو" },
    { id: 3, name: "بلاگ پست" },
  ];

  useEffect(() => {
    const scrollFunc = (e) => {
      let elHeight = refHeight.current.getBoundingClientRect().height;
      // console.log(elHeight, "element height");
      // let distanceTop = refHeight.current.getBoundingClientRect().top;
      // console.log(distanceTop, "distance top");
      // let scrollHeight = window.scrollY;
      // console.log(scrollHeight, "scroll height");
      let windowHeight = document.documentElement.clientHeight;
      console.log(windowHeight, "window height");

      let topCss = elHeight - (windowHeight - 24);
      console.log(topCss, "top css");
      setTopState(topCss);
    };
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);

  const magazineFinder = (id) => {
    if (id === 2) {
      return (
        <>
          <div className="text-[36px] font-[800] mt-[52px]">
            این یک متن آزمایشی برای این مقاله میباشد
          </div>
          <div className="w-full h-[460px] mt-[40px]">
            <img
              src=" https://i.ibb.co/JFrZSBq/Rectangle-571.png"
              alt="image1"
            />
          </div>

          <div className="mt-[32px]">
            وم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایااوم و لورم ایپسوم و
            لورملوایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملوایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم و وم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملورم ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم
            ایپسوم لورایپسوم
          </div>
          <div className="w-full h-[1px] bg-[#CBCBCB] mt-[36px]" />

          {/* <div className="flex w-full justify-between mt-[24px]">
            <TitleComponent title={"نظر کاربران"} />
            <div className="flex ">
              <SmsIcon style={{ color: "#36E2B4" }} />
              <p className="text-[16px] font-[600] mr-[6px]">ثبت نظر</p>
            </div>
          </div> */}
          <div className="space-y-[24px] mt-[24px]">
            <UserCommentComponent />
          </div>
        </>
      );
    } else if (id === 3) {
      return (
        <>
          <div className="text-[36px] font-[800] mt-[52px]">
            این یک متن آزمایشی برای این مقاله میباشد
          </div>
          <div className="w-full h-[460px] mt-[40px]">
            <img
              src=" https://i.ibb.co/JFrZSBq/Rectangle-571.png"
              alt="image1"
            />
          </div>
          <div className="mt-[32px]">
            وم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایااوم و لورم ایپسوم و
            لورملوایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملوایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم ووم لورم ایپسلو لورمایپسوم و لورم ایپسوم و لورملورم
            ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم ایپسوم
            لورایپسوم و لورم و وم لورم ایپسلو لورمایپسوم و لورم ایپسوم و
            لورملورم ایلورمایلورمایپسوم و لورم ایپسوم و لورم ایپسوم و لورم
            ایپسوم لورایپسوم
          </div>
        </>
      );
    }
  };
  return (
    <div className="flex w-full relative">
      <div className="w-[58px] ">
        <ul className="space-y-[46px] mt-[218px] sticky top-[50px]">
          <li>
            <SmsOutlinedIcon style={{ color: "#9966FF" }} />
          </li>
          <li>
            <ThumbUpAltOutlinedIcon style={{ color: "#9966FF" }} />
          </li>
          <li>
            <BookmarkBorderOutlinedIcon style={{ color: "#9966FF" }} />
          </li>
          <li>
            <ShareOutlinedIcon style={{ color: "#9966FF" }} />
          </li>
        </ul>
      </div>
      <div className=" flex-1 px-[80px] h-full border-r-[1px] border-l-[1px] border-[#CBCBCB] ">
        <WideMagazineCard />
        {magazineFinder(2)}
      </div>

      <div className="w-[520px] pr-[24px] ">
        <div
          ref={refHeight}
          // className="sticky top-[-617px]"
          style={{
            position: "sticky",
            top: `-${topState}px`,
          }}
        >
          <div className="mb-[24px]">
            <TitleComponent title={"مطالب مرتبط"} />
          </div>
          <div className="space-y-[24px]">
            {testArray.map((state, index) => (
              <MagazineLittleCard key={index} />
            ))}
          </div>
          <div className="space-y-[24px] mt-[24px] pb-[24px]">
            <TitleComponent title={"مشاوران"} />
            {testArray.map((state, index) => (
              <CounselorInMag key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineDetailPage;
