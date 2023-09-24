import React, { useState } from "react";
import HeaderFilter from "./filters/HeaderFilter";
import FilterWithTitle from "./FilterWithTitle";
import TestCard from "./TestCard";
import Switch from "./filters/Switch";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MosqueIcon from "@mui/icons-material/Mosque";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SortingFilter from "./SortingFilter";
import SearchInput from "./SearchInput";

const TestsPage = () => {
  const [testState, setTestState] = useState([
    {
      isActive: false,
      title: "تست‌های هوش و حافظه",
      icon: <PsychologyAltIcon style={{ color: "#9966FF" }} />,
      id: 1,
    },
    {
      isActive: false,
      title: "تست‌های شخصیت شناسی",
      icon: <PersonSearchIcon style={{ color: "#9966FF" }} />,
      id: 2,
    },
    {
      isActive: false,
      title: "تست‌های روابط اجتماعی",
      icon: <Diversity3Icon style={{ color: "#9966FF" }} />,
      id: 3,
    },
    {
      isActive: false,
      title: "تست‌های خانواده",
      icon: <FamilyRestroomIcon style={{ color: "#9966FF" }} />,
      id: 4,
    },
    {
      isActive: false,
      title: "تست‌های سبک زندگی",
      icon: <NightlifeIcon style={{ color: "#9966FF" }} />,
      id: 5,
    },
    {
      isActive: false,
      title: "تست‌های عشق و ازداج",
      icon: <FavoriteIcon style={{ color: "#9966FF" }} />,
      id: 6,
    },
    {
      isActive: false,
      title: "تست‌های رشدی و کودک",
      icon: <BedroomBabyIcon style={{ color: "#9966FF" }} />,
      id: 7,
    },
    {
      isActive: false,
      title: "تست‌های تحصیلی",
      icon: <CollectionsBookmarkIcon style={{ color: "#9966FF" }} />,
      id: 8,
    },
    {
      isActive: false,
      title: "تست‌های روانشناسی ورزش",
      icon: <SportsBasketballIcon style={{ color: "#9966FF" }} />,
      id: 8,
    },
    {
      isActive: false,
      title: "تست‌های روانشناسی معنویت",
      icon: <MosqueIcon style={{ color: "#9966FF" }} />,
      id: 9,
    },
    {
      isActive: false,
      title: "تست‌های شغلی و سازمانی",
      icon: <BusinessCenterIcon style={{ color: "#9966FF" }} />,
      id: 10,
    },
    {
      isActive: false,
      title: "تست‌های بالینی و تشخیصی",
      icon: <CoronavirusIcon style={{ color: "#9966FF" }} />,
      id: 11,
    },
  ]);

  return (
    <div className="w-full flex ">
      <div className="w-[392px] ">
        <HeaderFilter text="دسته بندی آزمون‌ها" />
        <FilterWithTitle
          titleState={testState}
          setTitleState={setTestState}
          styles="bg-[#F9F9F9]"
        />
        <div className="bg-[#F9F9F9] p-[24px] mt-[16px]">
          <p className="text-[20px] font-[700] mb-[16px]">رده سنی آزمون‌ها</p>
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-[400]">بزرگسالان</p>
            <Switch />
          </div>
          <div className="flex justify-between items-center mt-[8px]">
            <p className="text-[18px] font-[400]">نوجوانان</p>
            <Switch />
          </div>
          <div className="flex justify-between items-center mt-[8px]">
            <p className="text-[18px] font-[400]">کودکان</p>
            <Switch />
          </div>
        </div>
      </div>

      <div className=" flex flex-1 flex-col mr-[24px] space-y-[24px] mb-[24px]">
        <SortingFilter SearchInput={SearchInput} />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default TestsPage;
