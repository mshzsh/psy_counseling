import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import MainNavbar from "../../components/header/MainNavbar";
import VerifiedIcon from "@mui/icons-material/Verified";
import Switch from "../../components/filters/Switch";
import RingVolumeOutlinedIcon from "@mui/icons-material/RingVolumeOutlined";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { toEnDigit, toFaDigit } from "fa-utils";
import jsonCalendar from "../../services/jsonCalendar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "../../components/modal/Modal";
import TimeModal from "../../components/modal/TimeModal";
import CalendarDay from "../../components/calendar/CalendarDay";
import jsonCalendarHozuri from "../../services/jsonCalendarHozuri";

const ChooseDayLaout = () => {
  const [currentMonth, setCurrentMonth] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [daySelected, setDaySelected] = useState([]);
  const [dayTimeSelected, setDayTimeSelected] = useState(null);
  const [nextMonth, setNextMonth] = useState([]);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      address: "مرکز شماره ۱: تهران، کامرانیه جنوبی، خیابا ن دژمجو پلاک ۳۵",
      isActive: false,
    },
    {
      id: 2,
      address: "مرکز شماره ۱: تهران، کامرانیه جنوبی، خیابا ن دژمجو پلاک ۳۵",
      isActive: false,
    },
  ]);
  const allDays = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];
  const router = useRouter();

  const selectHandler = (id) => {
    let temp = addresses;
    temp.forEach((t) => (t.isActive = false));
    const index = temp.findIndex((t) => t.id === id);
    temp[index].isActive = true;
    setAddresses([...temp]);
  };

  useEffect(() => {
    if (router.query.testId) {
      console.log("test");
      const todayDate = new Date();

      const farsiToday = toEnDigit(
        Intl.DateTimeFormat("fa-IR").format(todayDate)
      );

      let month = [];
      if (router.query.testId === "3") {
        month = jsonCalendarHozuri;
      } else if (router.query.testId === "1" || router.query.testId === "2") {
        month = jsonCalendar;
      }

      let currentMonthState = month.filter((day) => {
        return +day.jalali_date.split("/")[1] == farsiToday.split("/")[1];
      });
      let nextMonthState = month.filter(
        (day) => +day.jalali_date.split("/")[1] != farsiToday.split("/")[1]
      );

      //add number before current month
      for (
        let i = currentMonthState[0]?.jalali_date.split("/")[2];
        i > 1;
        i--
      ) {
        currentMonthState = [
          {
            timetable: [],
            day_number:
              currentMonthState[0].day_number > 0
                ? currentMonthState[0].day_number - 1
                : 6,

            jalali_date: `1401/${farsiToday.split("/")[1]}/${
              i < 10 ? "0" + i - 1 : i - 1
            }`,
          },
          ...currentMonthState,
        ];
      }

      //add empty place for before current month
      const currentMonthFirstDayNumber = currentMonthState[0]?.day_number;
      for (let i = currentMonthFirstDayNumber; i > 0; i--) {
        currentMonthState = [
          {
            day_number:
              currentMonthState[0].day_number > 0
                ? currentMonthState[0].day_number - 1
                : 6,
            day_name:
              allDays[
                currentMonthState[0].day_number > 0
                  ? currentMonthState[0].day_number - 1
                  : 6
              ],
            timetable: [],
            jalali_date: null,
          },

          ...currentMonthState,
        ];
      }

      //add empty place for after current month
      const currentMonthLastDayNumber =
        currentMonthState[currentMonthState.length - 1]?.day_number;
      for (let i = currentMonthLastDayNumber; i < 6; i++) {
        currentMonthState = [
          ...currentMonthState,
          {
            day_number:
              currentMonthState[currentMonthState.length - 1].day_number > 0
                ? currentMonthState[currentMonthState.length - 1].day_number + 1
                : 6,
            day_name:
              allDays[
                currentMonthState[currentMonthState.length - 1].day_number > 0
                  ? currentMonthState[currentMonthState.length - 1].day_number +
                    1
                  : 6
              ],
            timetable: [],
            jalali_date: null,
          },
        ];
      }

      // add number after last day of next month

      if (
        nextMonthState[0]?.jalali_date.split("/")[1] >= 1 &&
        nextMonthState[0]?.jalali_date.split("/")[1] <= 6
      ) {
        for (let i = nextMonthState.length; i <= 31; i++) {
          nextMonthState = [
            ...nextMonthState,
            {
              timetable: [],
              day_number:
                nextMonthState[0].day_number > 0
                  ? nextMonthState[0].day_number + 1
                  : 6,
              jalali_date: `1401/${farsiToday.split("/")[1]}/${
                i < 10 ? "0" + i : i
              }`,
            },
          ];
        }
      } else if (
        nextMonthState[0]?.jalali_date.split("/")[1] >= 7 &&
        nextMonthState[0]?.jalali_date.split("/")[1] <= 11
      ) {
        for (let i = nextMonthState.length + 1; i <= 30; i++) {
          console.log(nextMonthState[0].jalali_date.split("/")[2], "state");
          nextMonthState = [
            ...nextMonthState,
            {
              timetable: [],
              day_number:
                nextMonthState[i - 2].day_number < 6
                  ? nextMonthState[i - 2].day_number + 1
                  : 0,
              jalali_date: `1401/${
                nextMonthState[0].jalali_date.split("/")[1]
              }/${i < 10 ? "0" + i : i}`,
              timetable: [],
            },
          ];
        }
      } else if (nextMonthState[0]?.jalali_date.split("/")[1] === 12) {
        for (let i = nextMonthState.length; i <= 29; i++) {
          nextMonthState = [
            ...nextMonthState,
            {
              timetable: [],
              day_number:
                nextMonthState[0].day_number > 0
                  ? nextMonthState[0].day_number + 1
                  : 6,
              jalali_date: `1401/${farsiToday.split("/")[1]}/${
                i < 10 ? "0" + i : i
              }`,
            },
          ];
        }
      }

      // add empty place before first day in next month
      const nextMonthFirstDayNumber = nextMonthState[0]?.day_number;
      for (let i = nextMonthFirstDayNumber; i > 0; i--) {
        nextMonthState = [
          {
            day_number:
              nextMonthState[0].day_number > 0
                ? nextMonthState[0].day_number - 1
                : 6,
            day_name:
              allDays[
                nextMonthState[0].day_number > 0
                  ? nextMonthState[0].day_number - 1
                  : 6
              ],
            timetable: [],
            jalali_date: null,
          },

          ...nextMonthState,
        ];
      }

      //add empty place for after current month
      const nextMonthLastDayNumber =
        nextMonthState[nextMonthState.length - 1]?.day_number;

      for (let i = nextMonthLastDayNumber; i < 6; i++) {
        nextMonthState = [
          ...nextMonthState,
          {
            day_number:
              nextMonthState[nextMonthState.length - 1].day_number > 0
                ? nextMonthState[nextMonthState.length - 1].day_number + 1
                : 6,
            day_name:
              allDays[
                nextMonthState[nextMonthState.length - 1].day_number > 0
                  ? nextMonthState[nextMonthState.length - 1].day_number + 1
                  : 6
              ],
            timetable: [],
            jalali_date: null,
          },
        ];
      }

      nextMonthState.forEach((day, i) => {
        let isActive = true;

        const tempArray = day.timetable.filter((time) => time.status);
        if (tempArray.length === 0) {
          isActive = false;
        }
        nextMonthState[i].isActive = isActive;
      });

      currentMonthState.forEach((day, i) => {
        let isActive = true;

        const tempArray = day.timetable.filter((time) => time.status);

        if (tempArray.length === 0) {
          isActive = false;
        }
        currentMonthState[i].isActive = isActive;
      });

      setCurrentMonth(currentMonthState);
      setNextMonth(nextMonthState);
    }
  }, [router]);

  console.log(dayTimeSelected, "day time selected");
  return (
    <div className="">
      <header className="bg-[#F9F9F9]">
        <MainNavbar />
      </header>
      <mian className="container w-full mx-auto flex my-[20px]">
        <aside className="w-[392px]">
          <div className="h-[122px] w-full p-[16px] bg-[#F9F9F9] flex">
            <img
              width={90}
              height={90}
              src="https://i.ibb.co/M672r5D/Rectangle-367.png"
              alt="image1"
            />
            <div className="mr-[16px] flex flex-col justify-center">
              <div className="text-[18px] font-[600] flex">
                <VerifiedIcon style={{ color: "#0099FF" }} />
                <p className="mr-[8px]">نام و نام خانوادگی</p>
              </div>
              <p className="mt-[8px] text-[#9A9A9A]">حرفه در این بخش</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-[20px] bg-[#F9F9F9]  mt-[16px]">
            <div className="text-[18px] font-[600] text-[#CBCBCB] flex items-center">
              <RingVolumeOutlinedIcon
                style={{
                  color: "#CBCBCB",
                  fontSize: "24px",
                  marginTop: "-2px",
                }}
              />
              <p className="mr-[8px]">فوری</p>
            </div>
            <Switch />
          </div>
          <div className="flex flex-col w-full mt-[16px]">
            <p className="text-[20px] font-[700] pt-[24px] pb-[6px] bg-[#F9F9F9] pr-[24px]">
              مراکز حضور روانشناس
            </p>
            {addresses.map((ad, index) => (
              <>
                <div
                  onClick={() => selectHandler(ad.id)}
                  className={`w-full flex items-center pr-[24px] py-[8px] text-[#9A9A9A] justify-between cursor-pointer ${
                    (index + 1) % 2 !== 0 ? "bg-[#EDEDED]" : "bg-[#F9F9F9]"
                  }`}
                >
                  <p className="ml-[18px]  text-[18px] font-[400]">
                    {ad.address}
                  </p>
                  <div className="w-[26px] ml-[24px]">
                    <div
                      className={`w-[24px] ml-[] flex justify-center items-center h-[24px] border-[1px] ${
                        ad.isActive ? "border-[#36E2B4]" : "border-[#D1D1D6]"
                      } rounded-[50%]`}
                    >
                      {ad.isActive && (
                        <div className="w-[12px] h-[12px] bg-[#36E2B4] rounded-[50%]" />
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="w-full flex justify-between mt-[24px] mb-[16px]">
            <div className="flex items-center text-[18px] font-[600]">
              <PhoneCallbackIcon style={{ color: "#36E2B4" }} />
              <p>مشاوره تلفنی</p>
            </div>
            <p className="text-[28px] font-[800] text-[#36E2B4]">
              {toFaDigit([95000].toLocaleString())}تومان
            </p>
          </div>
          <button
            onClick={() =>
              router.push({ pathname: `/buying/${dayTimeSelected.id}` })
            }
            className="w-full bg-[#36E2B4] text-[20px] font-[700] flex items-center justify-center h-[56px]"
          >
            ادامه و پرداخت
          </button>
        </aside>
        <section className="flex-1 mr-[58px]">
          <>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex">
                  {allDays.map((nameDay, index) => (
                    <p
                      key={index}
                      className="h-[56px]  w-[calc(100%/7)] border-[1px] border-[#CBCBCB] flex justify-center items-center"
                    >
                      {nameDay}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap ">
                  {currentMonth.map((d, index) => (
                    <CalendarDay
                      key={index}
                      day={d}
                      setModalState={setModalState}
                      setDaySelected={setDaySelected}
                      dayTimeSelected={dayTimeSelected}
                      daySelected={daySelected}
                    />
                  ))}
                  {modalState && (
                    <Modal
                      OurModal={TimeModal}
                      setModalState={setModalState}
                      state={daySelected}
                      getState={setDayTimeSelected}
                      selectedState={dayTimeSelected}
                    />
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col mt-[50px]">
                <div className="flex ">
                  {allDays.map((nameDay, index) => (
                    <p
                      key={index}
                      className="h-[56px] w-[calc(100%/7)] text-[18px] font-[600] border-[1px] border-[#CBCBCB] flex justify-center items-center"
                    >
                      {nameDay}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap ">
                  {nextMonth.map((d, index) => (
                    <CalendarDay
                      key={index}
                      day={d}
                      setModalState={setModalState}
                      setDaySelected={setDaySelected}
                      dayTimeSelected={dayTimeSelected}
                      daySelected={daySelected}
                    />
                    // <div
                    //   key={index}
                    //   className={`${
                    //     d.isActive ? "bg-[#fff]" : "bg-[#F9F9F9] text-[#9A9A9A]"
                    //   } flex justify-between p-[8px] h-[102px] w-[calc(100%/7)] text-[22px] font-[400] border-[1px] border-[#CBCBCB]`}
                    // >
                    //   <p>
                    //     {toFaDigit(+d?.jalali_date?.split("/")[2]) === "NaN"
                    //       ? ""
                    //       : toFaDigit(+d?.jalali_date?.split("/")[2])}
                    //   </p>
                    //   {d.isActive && (
                    //     <p>
                    //       <MoreHorizIcon />
                    //     </p>
                    //   )}
                    // </div>
                  ))}
                  {modalState && (
                    <Modal
                      OurModal={TimeModal}
                      setModalState={setModalState}
                      state={daySelected}
                      getState={setDayTimeSelected}
                      selectedState={dayTimeSelected}
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        </section>
      </mian>
      <footer className="bg-[#F9F9F9]">
        <Footer />
      </footer>
    </div>
  );
};

export default ChooseDayLaout;
