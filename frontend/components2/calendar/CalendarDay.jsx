import React from "react";
import { useRouter } from "next/router";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { toEnDigit, toFaDigit } from "fa-utils";

const CalendarDay = ({
  day,
  index,
  setModalState,
  setDaySelected,
  dayTimeSelected,
  daySelected,
}) => {
  console.log(daySelected, "day selected");
  console.log(dayTimeSelected, "day time selected");
  console.log(day, "day");

  const router = useRouter();
  return (
    <div
      onClick={() => {
        if (day.isActive) {
          setModalState(true);
          setDaySelected(day);
        }
      }}
      key={index}
      className={`
   flex flex-col   h-[102px] w-[calc(100%/7)]  text-[22px] font-[400] border-[1px] border-[#CBCBCB]`}
    >
      <div
        className={`flex flex-col justify-between h-full p-[8px]  ${
          day.isActive
            ? `${
                day.timetable.find((time) => time.id === dayTimeSelected?.id)
                  ? "bg-[#B4F4E3] m-[8px] cursor-pointer"
                  : "bg-[#fff] cursor-pointer"
              }`
            : "bg-[#F9F9F9] text-[#9A9A9A]"
        }`}
      >
        <div className="w-full h-[22px] items-center flex justify-between">
          <p>
            {toFaDigit(+day?.jalali_date?.split("/")[2]) === "NaN"
              ? ""
              : toFaDigit(+day?.jalali_date?.split("/")[2])}
          </p>
          {day.isActive && (
            <p>
              <MoreHorizIcon />
            </p>
          )}
        </div>
        {(router.query.testId === "1" || router.query.testId === "2") && (
          <div className="flex flex-col ">
            {(day.isActive &&
              day.timetable.find((time) => time.id === dayTimeSelected?.id) && (
                <div className="flex flex-col">
                  <PhoneCallbackIcon
                    style={{
                      fontSize: "18px",
                      color: "#1AB88E",
                    }}
                    className="mt-[6px] mb-[4px]"
                  />
                  <p className="text-[14px] font-[600]">صبح</p>
                </div>
              )) ||
              (day.isActive &&
                day.timetable.find(
                  (time) => time.id === dayTimeSelected?.id
                ) && (
                  <div className="flex flex-col">
                    <PhoneCallbackIcon
                      style={{
                        fontSize: "18px",
                        color: "#1AB88E",
                      }}
                      className="mt-[6px] mb-[4px]"
                    />
                    <p className="text-[14px] font-[600]">بعد از ظهر</p>
                  </div>
                ))}
          </div>
        )}

        {router.query.testId === "3" && (
          <div className="flex flex-col ">
            {day.isActive &&
              day.timetable.find((time) => time.id === dayTimeSelected?.id) && (
                <div className="flex flex-col">
                  <PhoneCallbackIcon
                    style={{
                      fontSize: "18px",
                      color: "#1AB88E",
                    }}
                    className="mt-[6px] mb-[4px]"
                  />
                  <p className="text-[14px] font-[600]">
                    {toFaDigit(dayTimeSelected.time)}
                  </p>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
