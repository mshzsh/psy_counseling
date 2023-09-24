import React, { useEffect, useState } from "react";

const DayActivity = () => {
  const [days, setDays] = useState();
  const allDays = [
    { id: 1, isActive: true, dayName: "شنبه" },
    { id: 2, isActive: true, dayName: "یکشنبه" },
    { id: 3, isActive: true, dayName: "دوشنبه" },
    { id: 4, isActive: false, dayName: "سه‌شنبه" },
    { id: 5, isActive: true, dayName: "چهارشنبه" },
    { id: 6, isActive: true, dayName: "پنجشنبه" },
    { id: 7, isActive: false, dayName: "جمعه" },
  ];

  useEffect(() => {
    setDays(allDays);
  }, []);

  return (
    <div className="w-full ">
      <p className="text-[22px] font-[700]">روزهای فعالیت</p>
      <ul className="flex w-full my-[24px]">
        {days?.map((day, index) => (
          <li
            key={index}
            className={`px-[48px] py-[42px] w-[176px] flex justify-center text-[24px] font-[500] border-[1px] border-[#CBCBCB] ${
              day.isActive ? "text-[#36E2B4]" : "text-[#9A9A9A]"
            }`}
          >
            {day.dayName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayActivity;
