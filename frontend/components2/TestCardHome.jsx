import { toFaDigit } from "fa-utils";
import React, { useState } from "react";

const TestCardHome = ({ pic }) => {
  const [open, setOpen] = useState(false);
  const test =
    "با انجام این تست می‌توانید پروفایل کامل MMPI را همراه با «تفسیر دقیق» شاخص‌های اعتباری و بالینی دریافت کنید. نمودارها و پاسخنامه اختصاصی با طراحی حرفه‌ای به همراه «راهکارهای ضروری و مفید» از ویژگی های مهم تست MMPI ای سنج است";
  const testTitle = "تست شخصیت شناسی MMPI فرم بلند(567 سوالی)";
  console.log(test.split(" ").slice(0, 34).join(" "), "split");
  return (
    <div
      className="w-[546px] h-[546px] relative text-[#fff] "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img
        className={
          open
            ? "absolute z-[1] transition-all duration-700 grayscale-0"
            : "absolute z-[1] transition-all duration-700 grayscale"
        }
        src={pic}
        width={546}
        height={546}
        alt="image1"
      />
      <div
        className="w-[546px] h-[546px] absolute z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 69.06%)",
        }}
      />
      <div className="z-10 absolute bottom-0 mb-[170px] px-[40px]">
        <p className="text-[16px] font-[600] text-[#fff]">
          امتیاز:{" "}
          <span className="text-[20px] font-[700]">
            {toFaDigit(5)} / {toFaDigit(4.9)}
          </span>
        </p>
        <p className="text-[16px] font-[600]">
          زمان تقریبی: {toFaDigit(15)} دقیقه
        </p>
        <div
          className={
            open
              ? "transition-all duration-700 h-[280px]"
              : "transition-all duration-700 h-0"
          }
        />
      </div>
      <div
        className={
          open
            ? "absolute z-10 mb-[50px] px-[40px]  bottom-0 transition-all duration-700"
            : "absolute z-10 mb-[50px] px-[40px] bottom-0  transition-all duration-700"
        }
      >
        <p
          className={`text-[36px]  font-[800] ${
            open
              ? "mb-[130px] transition-all duration-700"
              : "mb-0 transition-all duration-700"
          }`}
        >
          {toFaDigit(testTitle)}
        </p>
        <div
          className={
            open
              ? "transition-all duration-700 mb-7 absolute bottom-[10px] opacity-100"
              : "transition-all duration-700 mb-0 absolute bottom-[10px] opacity-0"
          }
        >
          <p className="text-[20px] font-[700]">
            {test.split(" ").slice(0, 25).join(" ").concat("...")}
          </p>
        </div>
      </div>
      <button
        className={
          open
            ? "w-full absolute z-10 bottom-0 h-[50px] bg-[#36E2B4] transition-all duration-700 opacity-100 items-center justify-center"
            : "w-full absolute z-10 bottom-0 h-[50px] bg-[#36E2B4] transition-all duration-700 opacity-0 items-center justify-center"
        }
      >
        شروع آزمون
      </button>
    </div>
  );
};

export default TestCardHome;
