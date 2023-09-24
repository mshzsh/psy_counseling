import React, { useState, useEffect } from "react";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { useRouter, withRouter } from "next/router";

const TimeModal = ({ state, getState, setModalState, selectedState }) => {
  const [timeState, setTimeState] = useState([
    { id: 1, timeName: "صبح", isSelected: false },
    { id: 2, timeName: "بعد از ظهر", isSelected: false },
  ]);
  const [timeSelected, setTimeSelected] = useState("");
  const [hozuriTime, setHozuriTime] = useState([]);

  const router = useRouter();

  console.log(state, "state");

  // useEffect(() => {
  //   if (router.query.testId === "3") {
  //     let tempArray = state;
  //     tempArray.forEach((day) => (day.isSelected = false));

  //     setHozuriTime(state);
  //   }
  // }, []);

  return (
    <div className="flex flex-col w-[526px] h-[412px] px-[40px] bg-[#fff] items-center">
      <HistoryToggleOffIcon
        style={{ color: "#9966FF", fontSize: "60px", marginTop: "26px" }}
      />
      <p className="text-[24px] font-[500] mt-[8px]">
        زمان مشاوره خود را انتخاب کنید
      </p>
      {(router.query.testId === "1" || router.query.testId === "2") && (
        <div className="flex flex-col items-center text-[24px] font-[500] my-[34px] space-y-[40px]">
          {timeState.map((time, i) => (
            <p
              onClick={() => {
                if (
                  state.timetable[i].status &&
                  state.timetable[i].id !== selectedState?.id
                ) {
                  getState(state.timetable[i]);
                  setModalState(false);
                }
                // let tempArray = timeState;
                // tempArray.forEach((day) => (day.isSelected = false));
                // tempArray[i].isSelected = true;
                // setTimeState([...tempArray]);
                // setTimeSelected(state.timetable[i]);
              }}
              key={time.id}
              className={
                state.timetable[i].status &&
                state.timetable[i].id !== selectedState?.id
                  ? "text-black cursor-pointer"
                  : "text-[#CBCBCB]"
              }
            >
              {time.timeName}
            </p>
          ))}
        </div>
      )}

      {router.query.testId === "3" && (
        <div className="flex flex-wrap items-center text-[24px] font-[500] my-[34px]  gap-x-[24px]">
          {state.timetable.map((time, i) => (
            <p
              onClick={() => {
                if (
                  state.timetable[i].status &&
                  state.timetable[i].id !== selectedState?.id
                ) {
                  getState(state.timetable[i]);
                  setModalState(false);
                }
                // let tempArray = timeState;
                // tempArray.forEach((day) => (day.isSelected = false));
                // tempArray[i].isSelected = true;
                // setTimeState([...tempArray]);
                // setTimeSelected(state.timetable[i]);
              }}
              key={time.id}
              className={
                state.timetable[i].status &&
                state.timetable[i].id !== selectedState?.id
                  ? "text-black cursor-pointer w-[54px]"
                  : "text-[#CBCBCB] w-[54px]"
              }
            >
              {time.time}
            </p>
          ))}
        </div>
      )}

      {/* <button
        onClick={() => {
          // // }
          // router.push({
          //   pathname: `/buying/${timeSelected.id}`,
          // });
        }}
        // className="w-full flex justify-center items-center h-[54px] bg-[#36E2B4] text-[22px] font-[600]"
      >
        تایید
      </button> */}
    </div>
  );
};

export default TimeModal;
