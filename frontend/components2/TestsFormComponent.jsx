import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { toFaDigit } from "fa-utils";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const TestsFormComponent = () => {
  const [rightSelectIcon, setRightSelectIcon] = useState(false);
  const [leftSelectIcon, setLeftSelectIcon] = useState(false);
  const [freeInterpretation, setFreeInterpretation] = useState(false);
  const [advanceInterpretation, setAdvanceInterpretation] = useState(false);

  return (
    <div className="w-[1016px] mb-5 px-[190px] py-[52px] flex flex-col mx-auto bg-[#F9F9F9] items-center">
      <h1 className="text-[28px] font-[800]">تست شخصیت شناسی نئو (NEO PI-R)</h1>
      <p className="text-[18px] font-[600] mt-[8px] text-[#9A9A9A]">
        لطفا جهت شروع یکی از موارد زیر را انتخاب کنید
      </p>
      <div className="flex p-[16px] bg-[#fff] mt-[24px]">
        <button
          onClick={() => {
            setFreeInterpretation(true);
            setAdvanceInterpretation(false);
          }}
          className={`border-[1px] w-[294px] h-[62px] text-[20px] font-[700] justify-center items-center border-[${
            freeInterpretation ? "#36E2B4" : "#CBCBCB"
          }] flex`}
        >
          <EmojiObjectsOutlinedIcon
            style={{
              color: `${freeInterpretation ? "#36E2B4" : "#CBCBCB"}`,
              fontSize: "30px",
              marginLeft: "8px",
            }}
          />
          <p
            className={`${
              freeInterpretation ? "text-[#36E2B4]" : "text-[#CBCBCB]"
            }`}
          >
            تفسیر رایگان و محدود
          </p>
        </button>
        <button
          onClick={() => {
            setFreeInterpretation(false);
            setAdvanceInterpretation(true);
          }}
          className={`border-[1px] w-[294px] h-[62px] text-[20px] font-[700] justify-center items-center mr-[16px] border-[${
            advanceInterpretation ? "#9966FF" : "#CBCBCB"
          }] flex`}
        >
          <SpeedIcon
            style={{
              color: `${advanceInterpretation ? "#9966FF" : "#CBCBCB"}`,
              fontSize: "30px",
              marginLeft: "8px",
            }}
          />
          <p
            className={`${
              advanceInterpretation ? "text-[#9966FF]" : "text-[#CBCBCB]"
            }`}
          >
            تفسیر پیشرفته و کامل
          </p>
        </button>
      </div>
      <div className="flex w-full mt-[62px]">
        <div className="flex w-full justify-center">
          <div className="w-[296px] flex flex-col bg-[#fff] relative z-20">
            <div className="w-full">
              <p className="bg-[#F9F9F9] pb-[8px] text-[18px] font-[400]">
                سال تولد خود را انتخاب کنید
              </p>
              <select
                onClick={() => setRightSelectIcon(!rightSelectIcon)}
                className="w-full h-[46px] bg-transparent outline-none appearance-none border-[1px] border-[#CBCBCB] pr-2"
              >
                <option>{toFaDigit(1370)}</option>
                <option>{toFaDigit(1371)}</option>
                <option>{toFaDigit(1372)}</option>
              </select>
              <KeyboardArrowDownIcon
                style={{ color: "#36E2B4", fontSize: "38px" }}
                className={`absolute left-1 top-9 z-[-1] ${
                  rightSelectIcon ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
          <div className="w-[296px] mr-[46px] bg-[#fff] relative z-20">
            <div className="w-full">
              <p className="bg-[#F9F9F9] pb-[8px] text-[18px] font-[400]">
                جنسیت خود را انتخاب کنید
              </p>
              <select
                onClick={() => setLeftSelectIcon(!leftSelectIcon)}
                className="w-full h-[46px] bg-transparent outline-none appearance-none border-[1px] border-[#CBCBCB] pr-2"
              >
                <option value={""}>جنسیت</option>
                <option value={"1"}>زن</option>
                <option value={"2"}>مرد</option>
              </select>
              <KeyboardArrowDownIcon
                style={{ color: "#36E2B4", fontSize: "38px" }}
                className={`absolute left-1 top-9 z-[-1] ${
                  leftSelectIcon ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="w-full bg-[#36E2B4] mt-[52px] h-[54px] text-[22px] font-[600]  ">
        {!advanceInterpretation
          ? "شروع آزمون رایگان (تفسیر محدود)"
          : "خرید و شروع آزمون پیشرفته"}
      </button>
      {advanceInterpretation && (
        <div className="w-full">
          <div className="w-full flex justify-between text-[20px] font-[700] mt-[24px]">
            <p>مبلغ آزمون پیشرفته:</p>
            <div className="flex flex-col">
              <p className="text-[#CBCBCB] line-through">۳۵,۰۰۰ تومان </p>
              <p className="text-[#36E2B4]">۳۵,۰۰۰ تومان </p>
            </div>
          </div>
          <div className="w-full h-[627px] bg-[#CBCBCB] flex-col mt-[24px] pt-[24px]">
            <p className="text-[20px] font-[700] text-center ">
              مواردی که در تفسیر پیشرفته تست NEO PI-R دریافت می‌کنید
            </p>
          </div>
          <p className="text-[18px] font-[400] mt-[14px]">
            کاربر عزیز، شما می توانید با خرید نسخه پیشرفته به تمام موارد زیر که
            توسط متخصصان حال خوب تهیه شده است دسترسی پیدا کنید.
          </p>

          <ul className="space-y-[16px] mt-[30px]">
            <li className="flex items-center">
              <CheckBoxOutlinedIcon style={{ color: "#36E2B4" }} />
              <p className="mr-[8px] text-[16px] font-[600]">
                چه شرایطی باعث می شود که شما استرس بگیرید؟
              </p>
            </li>
            <li className="flex items-center">
              <CheckBoxOutlinedIcon style={{ color: "#36E2B4" }} />
              <p className="mr-[8px] text-[16px] font-[600]">
                چطور با سایر تیپ های دیگر بهترین ارتباط رو برقرار کنید.
              </p>
            </li>
            <li className="flex items-center">
              <CheckBoxOutlinedIcon style={{ color: "#36E2B4" }} />
              <p className="mr-[8px] text-[16px] font-[600]">
                سبک مناسب یادگیری شما
              </p>
            </li>

            <li className="flex items-center">
              <CheckBoxOutlinedIcon style={{ color: "#36E2B4" }} />
              <p className="mr-[8px] text-[16px] font-[600]">
                ویژگی های شما در کار تیمی
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestsFormComponent;
