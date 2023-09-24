import React, { useState } from "react";
import DayActivity from "../calendar/DayActivity";
import AboutMe from "../counselorDetail/AboutMe";
import CounselingPlans from "../counselorDetail/CounselingPlans";
import CounselorDetailCard from "../counselorDetail/CounselorDetailCard";
import InterViewVideo from "../counselorDetail/InterViewVideo";
import Guarantee from "../Guarantee";
import UserCommentComponent from "../userComment/UserCommentComponent";

const CounselDetailsPage = () => {
  const counselor = {
    name: "قلی",
    familyName: "قلیانی",
    experienceTime: "۲۰سال",
    successfulConsultation: "۶۵۴۸ (در ۳ سال)",
    psychologyNumber: "۶۷۷۶۱۶",
    Insurance: true,
    professio: "مشاور",
    comments: "",
  };

  return (
    <div className="flex">
      <div>
        <CounselingPlans />
      </div>
      <div className="mr-[24px] flex flex-col">
        <CounselorDetailCard />
        <div className="flex my-[24px]">
          <AboutMe />
          <InterViewVideo styles={"mr-[24px]"} />
        </div>
        <div className="w-full h-[303px] bg-[#F9F9F9] mb-[24px] pt-[53px]">
          <Guarantee />
        </div>
        <DayActivity />
        <UserCommentComponent />
      </div>
    </div>
  );
};

export default CounselDetailsPage;
