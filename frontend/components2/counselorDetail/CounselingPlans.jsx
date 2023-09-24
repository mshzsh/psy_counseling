import React, { useState, useEffect, useCallback } from "react";
import CounselingPlantsHeader from "./CounselingPlantsHeader";
import CounseltationPack from "./CounseltationPack";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { useRouter } from "next/router";

const test = [
  { id: 1, name: "مشاوره تلفنی" },
  { id: 2, name: "مشاوره ویدئویی" },
  { id: 3, name: "مشاوره حضوری" },
];

const CounselingPlans = () => {
  const [selectPack, setSelectPack] = useState([]);
  const router = useRouter();

  const handleSelect = (id) => {
    let arr = selectPack;

    const index = arr.findIndex((state) => state.id === id);
    if (!arr[index].isActive) {
      arr.forEach((state) => (state.isActive = false));
      arr[index].isActive = true;
      setSelectPack([...arr]);
    }
  };

  useEffect(() => {
    let test2 = [];
    test.forEach((state) => {
      test2 = [...test2, { ...state, isActive: false }];
    });
    setSelectPack(test2);
  }, []);

  return (
    <div className="flex flex-col w-[392px]">
      <CounselingPlantsHeader />
      {selectPack.map((pac) => (
        <CounseltationPack
          key={pac.id}
          // disableState={pac.id === 3 ? true : false}
          handleSelect={() => handleSelect(pac.id)}
          pac={pac}
          packName={pac.name}
        />
      ))}
      <button
        onClick={() =>
          router.push({
            pathname: "choose-time/1",
            query: { testId: selectPack.find((pac) => pac.isActive).id },
          })
        }
        disabled={
          selectPack.find((item) => item.isActive === true) ? false : true
        }
        className={` h-[56px] w-full text-[20px] font-[700] mt-[16px] flex justify-center items-center ${
          selectPack.find((item) => item.isActive === true)
            ? "bg-[#36E2B4]"
            : "bg-[#EDEDED]"
        }`}
      >
        انتخاب وقت
      </button>
      <div className="w-full flex flex-col mt-[24px]">
        <div className="flex">
          <VolunteerActivismOutlinedIcon
            style={{ color: "#0099FF", fontSize: "70px", marginTop: "10px" }}
          />
          <div className="flex flex-col mr-[18px]">
            <p className="text-[16px] font-[600]">تضمین بازگشت ۱۰۰% وجه</p>
            <p className="mt-[10px]">
              در صورت نارضایتی از مشاوره، هزینه شما پس از بررسی به طور کامل
              بازگردانده می‌شود
            </p>
          </div>
        </div>
        <p className="mt-[38px] cursor-pointer text-[#9966FF] text-[16px] font-[600]">
          چگونه مشاوره بگیریم؟
        </p>
      </div>
    </div>
  );
};

export default CounselingPlans;
